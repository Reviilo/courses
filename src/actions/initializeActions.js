"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActinTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActinTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitializeActions;