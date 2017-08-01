import immutable from 'immutable';

export default  {
	stepKey(state){
		state = state.update('keyNr', n => n + 1);
		state = state.set('key', 'a' + state.get('keyNr'));
		return state;
	},
	updateCategories(state){
		const cats = state.get('db').entrySeq().reduce((obj, [key, entry]) => {
			const list = (obj.get(entry.get('type')) || immutable.List()).push(key);
			return obj.set(entry.get('type'), list);
		}, immutable.Map());
		state = state.set('categories', cats);
		return state;
	}
}

