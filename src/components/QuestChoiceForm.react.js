import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class QuestChoiceForm extends Component {
	constructor(props) {
		super(props);
		this.doSubmit = this.doSubmit.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			text: '',
			nextKey: 'Nothing'
		};
	}

	doSubmit(e) {
		e.preventDefault();
		this.props.setChoice(this.state.text, this.state.nextKey, '');
	}

	onChange(prop, e) {
		this.setState({[prop]: e.target.value});
	}

	render() {
		return (
			<Form inline onSubmit={this.doSubmit}>
				<FormGroup controlId="formInlineName">
					<ControlLabel>choice text</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="some choice"
					             onChange={(event) => this.onChange('text', event)}
					             value={this.state.text}
					/>
				</FormGroup>
				{' '}
				<FormGroup controlId="formInlineEmail">
					<ControlLabel>nextKey</ControlLabel>
					{' '}
					<FormControl type="text" placeholder="next key"
					             onChange={(event) => this.onChange('nextKey', event)}
					             value={this.state.nextKey}
					/>
				</FormGroup>
				{' '}
				<Button type="submit">
					Set
				</Button>
			</Form>
		)
	}
}
export default QuestChoiceForm

