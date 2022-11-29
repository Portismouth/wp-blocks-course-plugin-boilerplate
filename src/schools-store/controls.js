import apiFetch from '@wordpress/api-fetch';
import { FETCH_SCHOOLS, CREATE_SCHOOL, TOGGLE_SCHOOL } from './types';

export const fetchSchools = () => {
	return {
		type: FETCH_SCHOOLS,
	};
};

export const createSchool = ( title ) => {
	return {
		type: CREATE_SCHOOL,
		title,
	};
};

export const toggleSchool = ( school ) => {
	return {
		type: TOGGLE_SCHOOL,
		school,
	};
};

export default {
	FETCH_SCHOOLS() {
		return apiFetch( {
			path: '/d2i-school-list/v1/schools',
		} ).then( ( schools ) => {
			return schools;
		} );
		// return window
		// 	.fetch('https://jsonplaceholder.typicode.com/school?_limit=10')
		// 	.then((response) => {
		// 		if (response.ok) {
		// 			return response.json();
		// 		}
		// 		throw new Error('Could not fetch school');
		// 	});
	},
	CREATE_SCHOOL( { title } ) {
		// return window
		// 	.fetch('https://jsonplaceholder.typicode.com/school', {
		// 		method: 'POST',
		// 		body: JSON.stringify({
		// 			title,
		// 			completed: false,
		// 			userId: 1,
		// 		}),
		// 		headers: {
		// 			'Content-type': 'application/json; charset=UTF-8',
		// 		},
		// 	})
		// 	.then((response) => {
		// 		if (response.ok) {
		// 			return response.json();
		// 		}
		// 		throw new Error('Could not create school.');
		// 	});
	},
	TOGGLE_SCHOOL( { school } ) {
		// return window
		// 	.fetch(`https://jsonplaceholder.typicode.com/school/${school.id}`, {
		// 		method: 'PATCH',
		// 		body: JSON.stringify({
		// 			completed: !school.completed,
		// 		}),
		// 		headers: {
		// 			'Content-type': 'application/json; charset=UTF-8',
		// 		},
		// 	})
		// 	.then((response) => {
		// 		if (response.ok) {
		// 			return response.json();
		// 		}
		// 		throw new Error('Could not update school.');
		// 	});
	},
};
