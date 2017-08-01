import React from 'react';
import immutable from 'immutable';
import QuestTextForm from './QuestTextForm.react'
const QuestText = (props) => {
	const cat = props.categories.get('questText') || immutable.List();
	const keyTest = cat.map(k => <div key={k}>key:{k}</div>);
	return (
		<div>
			<QuestTextForm {...props}/>
			{keyTest}
		</div>
	)
};

export default QuestText

