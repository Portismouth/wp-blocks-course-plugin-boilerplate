import apiFetch from '@wordpress/api-fetch';
import {
	FETCH_TASKS,
	CREATE_TASK,
	TOGGLE_TASK,
	UPDATE_TASK,
	DELETE_TASK,
} from './types';

export const fetchTasks = ( schoolId, schoolName ) => {
	return {
		type: FETCH_TASKS,
		schoolId,
		schoolName,
	};
};

export const createTask = ( newTask ) => {
	return {
		type: CREATE_TASK,
		newTask,
	};
};

export const toggleTask = ( task ) => {
	return {
		type: TOGGLE_TASK,
		task,
	};
};

export const editTask = ( task ) => {
	return {
		type: UPDATE_TASK,
		task,
	};
};

export const deleteTask = ( task ) => {
	return {
		type: DELETE_TASK,
		task,
	};
};

export default {
	FETCH_TASKS( { schoolId, schoolName } ) {
		return apiFetch( {
			path: `/d2i-task-list/v1/task-items/${ schoolId }?listName=${ schoolName }`,
		} ).then( ( tasks ) => {
			return tasks;
		} );
	},
	CREATE_TASK( { newTask } ) {
		return apiFetch( {
			path: `/d2i-task-list/v1/task-items`,
			method: 'POST',
			data: newTask,
		} ).then( ( task ) => {
			return task;
		} );
	},
	TOGGLE_TASK( { task } ) {
		return apiFetch( {
			path: `/d2i-task-list/v1/task-items/${ task.id }`,
			method: 'POST',
			data: task,
		} ).then( ( res ) => {
			return res;
		} );
	},
	UPDATE_TASK( { task } ) {
		return apiFetch( {
			path: `/d2i-task-list/v1/task-items/${ task.id }`,
			method: 'POST',
			data: task,
		} ).then( ( res ) => {
			return res;
		} );
	},
	DELETE_TASK( { task } ) {
		return apiFetch( {
			path: `/d2i-task-list/v1/task-items/${ task.id }`,
			method: 'DELETE'
		} ).then( ( res ) => {
			return res;
		} );
	},
};
