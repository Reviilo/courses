"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
    createCourse: function(course) {
        // here will be the AJAX
        var newCourse = CourseApi.saveCourse(course);

        // Hey dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });

    },

    updateCourse: function(course) {
        // here will be the AJAX
        var updateCourse = CourseApi.saveCourse(course);

        // Hey dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: updateCourse
        });

    },

    deleteCourse: function(id) {
        CourseApi.deleteCourse(id);

        // Hey dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: id
        });

    }
};

module.exports = CourseActions;