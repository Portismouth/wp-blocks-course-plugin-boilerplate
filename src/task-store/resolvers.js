import { dispatch } from '@wordpress/data';
import { fetchTasks } from './controls';
import { populateTasks } from './actions';

export function* getTasks(schoolId, listName) {
	try {
		const task = yield fetchTasks(schoolId, listName);
		return populateTasks(task);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not fetch tasks.'
		);
	}
}