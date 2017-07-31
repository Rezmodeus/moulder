import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Actions from './actions/Actions';
import QuestTab from './components/QuestTab.react'
import QuestText from './components/QuestText.react'
import {Tab, Tabs} from 'react-bootstrap';

class App extends Component {


	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSelect(key) {
		alert('selected ' + key);
		this.setState({key});
	}


	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<Tabs activeKey={this.props.activeTab} onSelect={this.props.setActiveTab} id="controlled-tab-example">
					<Tab eventKey={'quests'} title="quests">
						<QuestTab {...this.props}/>
					</Tab>
					<Tab eventKey={'strings'} title="strings">
						<QuestText {...this.props}/>
					</Tab>
					<Tab eventKey={'choices'} title="choices">choices tab content</Tab>
					<Tab eventKey={'items'} title="items">items tab content</Tab>
					<Tab eventKey={'npcs'} title="npcs">npcs tab content</Tab>
				</Tabs>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		activeTab: state.get('activeTab'),
		db: state.get('db')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setActiveTab: (tab) => dispatch(Actions.setActiveTab(tab)),
		addQuestText: (speaker, text, choices) => dispatch(Actions.addQuestText(speaker, text, choices))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


