import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Grid, Col, Row} from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={8}>col test</Col>
						<Col xs={6} md={4}>
							<Button block bsStyle="primary" bsSize="xsmall" title="ok"
							        onClick={() => console.log('click')}>ok</Button>

						</Col>
					</Row>
				</Grid>

			</div>
		);
	}
}

export default App;
