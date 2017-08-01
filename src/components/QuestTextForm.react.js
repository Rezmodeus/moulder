import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class QuestTextForm extends Component {
	constructor(props) {
		super(props);
		this.doSubmit = this.doSubmit.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			speaker: '',
			text: ''
		};
	}

	doSubmit(e) {
		e.preventDefault();
		this.props.addQuestText(this.state.speaker, this.state.text, []);
	}

	onChange(prop, e) {
		this.setState({[prop]: e.target.value});
	}

	render() {
		return (
			<Form inline onSubmit={this.doSubmit}>
				<FormGroup controlId="formInlineName">
					<ControlLabel>Speaker</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="Jane Doe"
					             onChange={(event) => this.onChange('speaker', event)}
					/>
				</FormGroup>
				{' '}
				<FormGroup controlId="formInlineEmail">
					<ControlLabel>Text</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="I need your help"
					             onChange={(event) => this.onChange('text', event)}
					/>
				</FormGroup>
				{' '}
				<Button type="submit">
					Add
				</Button>
			</Form>
		)
	}
}
export default QuestTextForm
