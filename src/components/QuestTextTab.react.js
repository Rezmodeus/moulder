import React from 'react';
import immutable from 'immutable';
import QuestTextForm from './QuestTextForm.react'
import QuestChoiceForm from './QuestChoiceForm.react'
import {Button} from 'react-bootstrap';
const QuestText = (props) => {
	const catKeys = props.categories.get('questText') || immutable.List();
	const keyTest = catKeys.map(k => <div key={k}>key:{k}</div>);
	return (
		<div>
			<QuestTextForm {...props}/>
			<QuestChoiceForm {...props}/>
			<Button >
				Add response
			</Button>
			{keyTest}
		</div>
	)
};

export default QuestText

