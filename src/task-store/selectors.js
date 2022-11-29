export const getTasks = (state) => {
	return state.items;
};

export const getTasksNumber = (state) => {
	return state.items.length;
};

export const getDoneTasks = (state) => {
	return state.items.filter((task) => task.completed).length;
};

export const getUnDoneTasks = (state) => {
	return state.items.filter((task) => !task.completed).length;
};