import immutable from 'immutable';
import Constants from '../Constants';
import Records from '../Records';
import ReducerLib from './ReducerLib'

export default function (state, action) {
	let obj;
	let record;
	let isFirst;
	let key;
	switch (action.type) {
		case Constants.SET_ACTIVE_TAB:
			state = state.set('activeTab', action.tab);
			return state;

		case Constants.SET_QUEST_TEXT:

			obj = {
				speaker: action.speaker,
				text: action.text,
				choices: action.choices
			};

			state = ReducerLib.stepKey(state);
			key = state.get('key');

			record = Records.get('questText').merge(immutable.fromJS(obj));
			state = state.setIn(['db', key], record);

			isFirst = (state.getIn(['categories', 'questText']) || immutable.List()).size === 0;
			state = isFirst
				? state.set('questStartKey', key)
				: state;

			state = ReducerLib.updateCategories(state);
			return state;

		case Constants.SET_CHOICE:
			obj = {
				text: action.text,
				nextKey: action.nextKey
			};
			const exists = (state.getIn(['categories', 'choice', action.key]) || immutable.List()).size === 0;
			record = Records.get('choice').merge(immutable.fromJS(obj));
			if (exists) {
				state = state.set(['db', action.key]);
			} else {
				state = ReducerLib.stepKey(state);
				key = state.get('key');
				state = state.set(['db', key]);
			}

			return state;
		default:
			return state;

	}
}

