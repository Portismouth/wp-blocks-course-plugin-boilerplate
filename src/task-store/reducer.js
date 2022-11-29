import { ADD_TASK, DELETE_TASK, POPULATE_TASKS, UPDATE_TASK } from './types';

const DEFAULT_STATE = {
	items: [],
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case ADD_TASK:
			return { ...state, items: [ ...state.items, action.task ] };

		case UPDATE_TASK: {
			const itemsCopy = [ ...state.items ];
			itemsCopy[ action.index ] = action.task;
			return { ...state, items: itemsCopy };
		}
		case DELETE_TASK: {
			const tasksCopy = [ ...state.items ];
			const idx = tasksCopy.indexOf( action.index );
			if ( idx > -1 ) {
				tasksCopy = tasksCopy.splice( idx, 1 );
			}

			return { ...state, items: tasksCopy };
		}
		default:
			return state;
	}
};

export default reducer;
