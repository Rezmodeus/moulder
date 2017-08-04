import React from 'react';
import immutable from 'immutable';
import QuestTextForm from './QuestTextForm.react'
import QuestChoiceForm from './QuestChoiceForm.react'
import {Button} from 'react-bootstrap';
const QuestText = (props) => {
	const catKeys = props.categories.get('questText') || immutable.List();
	const keyTest = catKeys.map(k => <div key={k}>key:{k}</div>);
	const content = catKeys.size === 0
		? <Button onClick={()=>props.addQuestText('Nothing', '', [])}>new text</Button>
		: <QuestTextForm {...props}/>;

	return (
		<div>
			{content}
		</div>
	)
};

export default QuestText

