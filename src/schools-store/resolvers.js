import { dispatch } from '@wordpress/data';
import { fetchSchools } from './controls';
import { populateSchools } from './actions';

export function* getSchools() {
	try {
		const school = yield fetchSchools();
		return populateSchools(school);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not fetch schools.'
		);
	}
}