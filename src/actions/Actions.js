import Constants from '../Constants';

export default {
	setActiveTab (tab) {
		return {
			type: Constants.SET_ACTIVE_TAB,
			tab
		};
	},

	addQuestText (speaker, text, choices) {
		return {
			type: Constants.SET_QUEST_TEXT,
			speaker,
			text,
			choices
		};
	},

	setChoice(text, nextKey, key = 'Nothing'){
		return {
			type: Constants.SET_CHOICE,
			text,
			nextKey,
			key
		};
	}
}

