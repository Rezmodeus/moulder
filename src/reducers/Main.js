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

			state = ReducerLib.stepKey(state);
			const key = state.get('key');

			const record = Records.get('questText').merge(immutable.fromJS(obj));
			state = state.setIn(['db', key], record);

			const isFirst = (state.getIn(['categories','questText']) || immutable.List()).size === 0;
			state = isFirst
				? state.set('questStartKey',key)
				: state;

			state = ReducerLib.updateCategories(state);
			return state;
		default:
			return state;

	}
}

