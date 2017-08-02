import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class QuestChoiceForm extends Component {
	constructor(props) {
		super(props);
		this.doSubmit = this.doSubmit.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			text: '',
			nextKey: ''
		};
	}

	doSubmit(e) {
		e.preventDefault();
		// this.props.addQuestText(this.state.speaker, this.state.text, []);
	}

	onChange(prop, e) {
		this.setState({[prop]: e.target.value});
	}

	render() {
		return (
			<Form inline onSubmit={this.doSubmit}>
				<FormGroup controlId="formInlineName">
					<ControlLabel>choice</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="some choice"
					             onChange={(event) => this.onChange('text', event)}
					/>
				</FormGroup>
				{' '}
				<FormGroup controlId="formInlineEmail">
					<ControlLabel>Text</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="next key"
					             onChange={(event) => this.onChange('nextKey', event)}
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
export default QuestChoiceForm

