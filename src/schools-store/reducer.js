import { ADD_SCHOOL, POPULATE_SCHOOLS, UPDATE_SCHOOL } from './types';

const DEFAULT_STATE = {
	items: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_SCHOOL:
			return { ...state, items: [...state.items, action.school] };

		case POPULATE_SCHOOLS:
			return { ...state, items: action.school };

		case UPDATE_SCHOOL: {
			const itemsCopy = [...state.items];
			itemsCopy[action.index] = action.school;
			return { ...state, items: itemsCopy };
		}

		default:
			return state;
	}
};

export default reducer;