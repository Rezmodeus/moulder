import {fromJS} from 'immutable';

export default fromJS({
	questText: {
		type: 'questText',
		speaker: '',
		text: '',
		choices: []
	},

	choice: {
		type: 'choice',
		text: '',
		nextKey: ''
	}
})

