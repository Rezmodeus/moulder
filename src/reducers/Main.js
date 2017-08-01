import immutable from 'immutable';
import Constants from '../Constants';
import Records from '../Records';
import ReducerLib from './ReducerLib'

export default function (state, action) {
	switch (action.type) {
		case Constants.SET_ACTIVE_TAB:
			state = state.set('activeTab', action.tab);
			return state;

		case Constants.SET_QUEST_TEXT:
			const obj = {
				speaker: action.speaker,
				text: action.text,
				choices: action.choices
			};
			const record = Records.get('questText').merge(immutable.fromJS(obj));
			state = ReducerLib.stepKey(state);
			state = state.setIn(['db', state.get('key')], record);
			state = ReducerLib.updateCategories(state);
			return state;
		default:
			return state;

	}
}

