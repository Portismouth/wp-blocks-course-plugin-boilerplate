import { dispatch } from '@wordpress/data';
import { ADD_TASK, DELETE_TASK, POPULATE_TASKS, UPDATE_TASK } from './types';
import { createTask, toggleTask as toggleTaskControl, editTask as editTaskControl, deleteTask as deleteTaskControl } from './controls';

export function* addTask(title) {
	try {
		const task = yield createTask(title);
		return {
			type: ADD_TASK,
			task,
		};
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not create task.'
		);
	}
}

export function* toggleTask(task, index) {
	try {
		yield updateTask({ ...task, loading: true }, index);
		const updatedTask = yield toggleTaskControl(task);
		return updateTask(updatedTask, index);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not update task.'
		);
	}
}

export function* editTask(task, index) {
	try {
		yield updateTask({...task, loading: true}, index);
		const updatedTask = yield editTaskControl(task);
		return updateTask(updatedTask, index);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not update task.'
		);
	}
}

export function* deleteTask(task, index) {
	try {
		const deletedTask = yield deleteTaskControl(task);
		return removeTask(deletedTask, index);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not delete task.'
		);
	}
}

export const updateTask = (task, index) => {
	return {
		type: UPDATE_TASK,
		index,
		task,
	};
};

export const removeTask = (task, index) => {
	return {
		type: DELETE_TASK,
		index,
		task
	}
}

export const populateTasks = (task) => {
	return {
		type: POPULATE_TASKS,
		task,
	};
};