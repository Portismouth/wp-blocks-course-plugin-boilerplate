/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/schools-store/actions.js":
/*!**************************************!*\
  !*** ./src/schools-store/actions.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSchool": function() { return /* binding */ addSchool; },
/* harmony export */   "populateSchools": function() { return /* binding */ populateSchools; },
/* harmony export */   "toggleSchool": function() { return /* binding */ toggleSchool; },
/* harmony export */   "updateSchool": function() { return /* binding */ updateSchool; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/schools-store/types.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/schools-store/controls.js");



function* addSchool(title) {
  try {
    const school = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.createSchool)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__.ADD_SCHOOL,
      school
    };
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not create school.');
  }
}
function* toggleSchool(school, index) {
  try {
    yield updateSchool({
      ...school,
      loading: true
    }, index);
    const updatedSchool = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.toggleSchool)(school);
    return updateSchool(updatedSchool, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not update school.');
  }
}
const updateSchool = (school, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SCHOOL,
    index,
    school
  };
};
const populateSchools = school => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.POPULATE_SCHOOLS,
    school
  };
};

/***/ }),

/***/ "./src/schools-store/controls.js":
/*!***************************************!*\
  !*** ./src/schools-store/controls.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSchool": function() { return /* binding */ createSchool; },
/* harmony export */   "fetchSchools": function() { return /* binding */ fetchSchools; },
/* harmony export */   "toggleSchool": function() { return /* binding */ toggleSchool; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/schools-store/types.js");


const fetchSchools = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.FETCH_SCHOOLS
  };
};
const createSchool = title => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.CREATE_SCHOOL,
    title
  };
};
const toggleSchool = school => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_SCHOOL,
    school
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_SCHOOLS() {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/d2i-school-list/v1/schools'
    }).then(schools => {
      return schools;
    });
    // return window
    // 	.fetch('https://jsonplaceholder.typicode.com/school?_limit=10')
    // 	.then((response) => {
    // 		if (response.ok) {
    // 			return response.json();
    // 		}
    // 		throw new Error('Could not fetch school');
    // 	});
  },

  CREATE_SCHOOL(_ref) {
    let {
      title
    } = _ref;
  },
  TOGGLE_SCHOOL(_ref2) {
    let {
      school
    } = _ref2;
  }
});

/***/ }),

/***/ "./src/schools-store/index.js":
/*!************************************!*\
  !*** ./src/schools-store/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/schools-store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/schools-store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/schools-store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/schools-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/schools-store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('d2i/schools', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/schools-store/reducer.js":
/*!**************************************!*\
  !*** ./src/schools-store/reducer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/schools-store/types.js");

const DEFAULT_STATE = {
  items: []
};
const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_SCHOOL:
      return {
        ...state,
        items: [...state.items, action.school]
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_SCHOOLS:
      return {
        ...state,
        items: action.school
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SCHOOL:
      {
        const itemsCopy = [...state.items];
        itemsCopy[action.index] = action.school;
        return {
          ...state,
          items: itemsCopy
        };
      }
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/schools-store/resolvers.js":
/*!****************************************!*\
  !*** ./src/schools-store/resolvers.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSchools": function() { return /* binding */ getSchools; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/schools-store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/schools-store/actions.js");



function* getSchools() {
  try {
    const school = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.fetchSchools)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_2__.populateSchools)(school);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not fetch schools.');
  }
}

/***/ }),

/***/ "./src/schools-store/selectors.js":
/*!****************************************!*\
  !*** ./src/schools-store/selectors.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDoneSchools": function() { return /* binding */ getDoneSchools; },
/* harmony export */   "getSchools": function() { return /* binding */ getSchools; },
/* harmony export */   "getSchoolsNumber": function() { return /* binding */ getSchoolsNumber; },
/* harmony export */   "getUnDoneSchools": function() { return /* binding */ getUnDoneSchools; }
/* harmony export */ });
const getSchools = state => {
  return state.items;
};
const getSchoolsNumber = state => {
  return state.items.length;
};
const getDoneSchools = state => {
  return state.items.filter(school => school.completed).length;
};
const getUnDoneSchools = state => {
  return state.items.filter(school => !school.completed).length;
};

/***/ }),

/***/ "./src/schools-store/types.js":
/*!************************************!*\
  !*** ./src/schools-store/types.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_SCHOOL": function() { return /* binding */ ADD_SCHOOL; },
/* harmony export */   "CREATE_SCHOOL": function() { return /* binding */ CREATE_SCHOOL; },
/* harmony export */   "FETCH_SCHOOLS": function() { return /* binding */ FETCH_SCHOOLS; },
/* harmony export */   "POPULATE_SCHOOLS": function() { return /* binding */ POPULATE_SCHOOLS; },
/* harmony export */   "TOGGLE_SCHOOL": function() { return /* binding */ TOGGLE_SCHOOL; },
/* harmony export */   "UPDATE_SCHOOL": function() { return /* binding */ UPDATE_SCHOOL; }
/* harmony export */ });
const ADD_SCHOOL = 'ADD_SCHOOL';
const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
const POPULATE_SCHOOLS = 'POPULATE_SCHOOLS';
const CREATE_SCHOOL = 'CREATE_SCHOOL';
const TOGGLE_SCHOOL = 'TOGGLE_SCHOOL';
const UPDATE_SCHOOL = 'UPDATE_SCHOOL';

/***/ }),

/***/ "./src/task-store/actions.js":
/*!***********************************!*\
  !*** ./src/task-store/actions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": function() { return /* binding */ addTask; },
/* harmony export */   "deleteTask": function() { return /* binding */ deleteTask; },
/* harmony export */   "editTask": function() { return /* binding */ editTask; },
/* harmony export */   "populateTasks": function() { return /* binding */ populateTasks; },
/* harmony export */   "removeTask": function() { return /* binding */ removeTask; },
/* harmony export */   "toggleTask": function() { return /* binding */ toggleTask; },
/* harmony export */   "updateTask": function() { return /* binding */ updateTask; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/task-store/types.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/task-store/controls.js");



function* addTask(title) {
  try {
    const task = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.createTask)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__.ADD_TASK,
      task
    };
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not create task.');
  }
}
function* toggleTask(task, index) {
  try {
    yield updateTask({
      ...task,
      loading: true
    }, index);
    const updatedTask = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.toggleTask)(task);
    return updateTask(updatedTask, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not update task.');
  }
}
function* editTask(task, index) {
  try {
    yield updateTask({
      ...task,
      loading: true
    }, index);
    const updatedTask = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.editTask)(task);
    return updateTask(updatedTask, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not update task.');
  }
}
function* deleteTask(task, index) {
  try {
    const deletedTask = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task);
    return removeTask(deletedTask, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not delete task.');
  }
}
const updateTask = (task, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.UPDATE_TASK,
    index,
    task
  };
};
const removeTask = (task, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.DELETE_TASK,
    index,
    task
  };
};
const populateTasks = task => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.POPULATE_TASKS,
    task
  };
};

/***/ }),

/***/ "./src/task-store/controls.js":
/*!************************************!*\
  !*** ./src/task-store/controls.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": function() { return /* binding */ createTask; },
/* harmony export */   "deleteTask": function() { return /* binding */ deleteTask; },
/* harmony export */   "editTask": function() { return /* binding */ editTask; },
/* harmony export */   "fetchTasks": function() { return /* binding */ fetchTasks; },
/* harmony export */   "toggleTask": function() { return /* binding */ toggleTask; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/task-store/types.js");


const fetchTasks = (schoolId, schoolName) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.FETCH_TASKS,
    schoolId,
    schoolName
  };
};
const createTask = newTask => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.CREATE_TASK,
    newTask
  };
};
const toggleTask = task => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_TASK,
    task
  };
};
const editTask = task => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.UPDATE_TASK,
    task
  };
};
const deleteTask = task => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__.DELETE_TASK,
    task
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_TASKS(_ref) {
    let {
      schoolId,
      schoolName
    } = _ref;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/d2i-task-list/v1/task-items/${schoolId}?listName=${schoolName}`
    }).then(tasks => {
      return tasks;
    });
  },
  CREATE_TASK(_ref2) {
    let {
      newTask
    } = _ref2;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/d2i-task-list/v1/task-items`,
      method: 'POST',
      data: newTask
    }).then(task => {
      return task;
    });
  },
  TOGGLE_TASK(_ref3) {
    let {
      task
    } = _ref3;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/d2i-task-list/v1/task-items/${task.id}`,
      method: 'POST',
      data: task
    }).then(res => {
      return res;
    });
  },
  UPDATE_TASK(_ref4) {
    let {
      task
    } = _ref4;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/d2i-task-list/v1/task-items/${task.id}`,
      method: 'POST',
      data: task
    }).then(res => {
      return res;
    });
  },
  DELETE_TASK(_ref5) {
    let {
      task
    } = _ref5;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/d2i-task-list/v1/task-items/${task.id}`,
      method: 'DELETE'
    }).then(res => {
      return res;
    });
  }
});

/***/ }),

/***/ "./src/task-store/index.js":
/*!*********************************!*\
  !*** ./src/task-store/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/task-store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/task-store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/task-store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/task-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/task-store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('d2i/tasks', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/task-store/reducer.js":
/*!***********************************!*\
  !*** ./src/task-store/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/task-store/types.js");

const DEFAULT_STATE = {
  items: []
};
const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.task]
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TASK:
      {
        const itemsCopy = [...state.items];
        itemsCopy[action.index] = action.task;
        return {
          ...state,
          items: itemsCopy
        };
      }
    case _types__WEBPACK_IMPORTED_MODULE_0__.DELETE_TASK:
      {
        const tasksCopy = [...state.items];
        const idx = tasksCopy.indexOf(action.index);
        if (idx > -1) {
          tasksCopy = tasksCopy.splice(idx, 1);
        }
        return {
          ...state,
          items: tasksCopy
        };
      }
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/task-store/resolvers.js":
/*!*************************************!*\
  !*** ./src/task-store/resolvers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTasks": function() { return /* binding */ getTasks; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/task-store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/task-store/actions.js");



function* getTasks(schoolId, listName) {
  try {
    const task = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.fetchTasks)(schoolId, listName);
    return (0,_actions__WEBPACK_IMPORTED_MODULE_2__.populateTasks)(task);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not fetch tasks.');
  }
}

/***/ }),

/***/ "./src/task-store/selectors.js":
/*!*************************************!*\
  !*** ./src/task-store/selectors.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDoneTasks": function() { return /* binding */ getDoneTasks; },
/* harmony export */   "getTasks": function() { return /* binding */ getTasks; },
/* harmony export */   "getTasksNumber": function() { return /* binding */ getTasksNumber; },
/* harmony export */   "getUnDoneTasks": function() { return /* binding */ getUnDoneTasks; }
/* harmony export */ });
const getTasks = state => {
  return state.items;
};
const getTasksNumber = state => {
  return state.items.length;
};
const getDoneTasks = state => {
  return state.items.filter(task => task.completed).length;
};
const getUnDoneTasks = state => {
  return state.items.filter(task => !task.completed).length;
};

/***/ }),

/***/ "./src/task-store/types.js":
/*!*********************************!*\
  !*** ./src/task-store/types.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TASK": function() { return /* binding */ ADD_TASK; },
/* harmony export */   "CREATE_TASK": function() { return /* binding */ CREATE_TASK; },
/* harmony export */   "DELETE_TASK": function() { return /* binding */ DELETE_TASK; },
/* harmony export */   "FETCH_TASKS": function() { return /* binding */ FETCH_TASKS; },
/* harmony export */   "POPULATE_TASKS": function() { return /* binding */ POPULATE_TASKS; },
/* harmony export */   "TOGGLE_TASK": function() { return /* binding */ TOGGLE_TASK; },
/* harmony export */   "UPDATE_TASK": function() { return /* binding */ UPDATE_TASK; }
/* harmony export */ });
const ADD_TASK = 'ADD_TASK';
const FETCH_TASKS = 'FETCH_TASKS';
const POPULATE_TASKS = 'POPULATE_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-store */ "./src/task-store/index.js");
/* harmony import */ var _schools_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schools-store */ "./src/schools-store/index.js");


}();
/******/ })()
;
//# sourceMappingURL=index.js.map