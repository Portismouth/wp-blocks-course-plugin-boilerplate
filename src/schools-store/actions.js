import { dispatch } from '@wordpress/data';
import { ADD_SCHOOL, POPULATE_SCHOOLS, UPDATE_SCHOOL } from './types';
import { createSchool, toggleSchool as toggleSchoolControl } from './controls';

export function* addSchool(title) {
	try {
		const school = yield createSchool(title);
		return {
			type: ADD_SCHOOL,
			school,
		};
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not create school.'
		);
	}
}

export function* toggleSchool(school, index) {
	try {
		yield updateSchool({ ...school, loading: true }, index);
		const updatedSchool = yield toggleSchoolControl(school);
		return updateSchool(updatedSchool, index);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not update school.'
		);
	}
}

export const updateSchool = (school, index) => {
	return {
		type: UPDATE_SCHOOL,
		index,
		school,
	};
};

export const populateSchools = (school) => {
	return {
		type: POPULATE_SCHOOLS,
		school,
	};
};