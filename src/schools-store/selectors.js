export const getSchools = (state) => {
	return state.items;
};

export const getSchoolsNumber = (state) => {
	return state.items.length;
};

export const getDoneSchools = (state) => {
	return state.items.filter((school) => school.completed).length;
};

export const getUnDoneSchools = (state) => {
	return state.items.filter((school) => !school.completed).length;
};