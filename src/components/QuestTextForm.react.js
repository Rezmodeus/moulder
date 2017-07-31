import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
const QuestTextForm = ({addQuestText}) => {

	const doSubmit = (e) => {
		e.preventDefault();
		addQuestText('hej');
	};

	return (
		<Form inline onSubmit={doSubmit}>
			<FormGroup controlId="formInlineName">
				<ControlLabel>Speaker</ControlLabel>
				{' '}
				<FormControl type="text" placeholder="Jane Doe"/>
			</FormGroup>
			{' '}
			<FormGroup controlId="formInlineEmail">
				<ControlLabel>Text</ControlLabel>
				{' '}
				<FormControl type="text" placeholder="I need your help"/>
			</FormGroup>
			{' '}
			<Button type="submit">
				Add
			</Button>
		</Form>
	)
};
export default QuestTextForm
