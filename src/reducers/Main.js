import immutable from 'immutable';
import Constants from '../Constants';

export default function (state, action) {
	switch (action.type) {
		case Constants.SET_ACTIVE_TAB:
			state = state.set('activeTab', action.tab);
			return state;

		case Constants.ADD_QUEST_TEXT:
			return state;
		default:
			return state;

	}
}

