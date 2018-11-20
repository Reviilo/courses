"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var manageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionsFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            course: {
                id: '',
                title: '',
                watchHref: '',
                author: {
                    id: '',
                    name: ''
                },
                length: '',
                category: ''
            },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function () {
        var courseId = this.props.params.id;

        if (courseId) {
            var dato = CourseStore.getCourseById(courseId);
            this.setState({ course: CourseStore.getCourseById(courseId) });
        }
    },

    setCourseState: function (event) {
        this.setState({dirty: true});
        var name = event.target.name;
        var value = event.target.value;
        if (name === "author") {
            this.state.course.author.name = value;
        } else {
            this.state.course[name] = value;    
        }
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function() {
        var isValid = true;

        if(this.state.course.title.length < 3) {
            this.state.errors.title = "The title need more than 3 letters please make better";
            isValid = false;
        }
        
        if(this.state.course.watchHref.length < 3) {
            this.state.errors.watchHref = "The Href need more than 3 letters please make better";
            isValid = false;
        }

        if(this.state.course.author.length < 3) {
            this.state.errors.authorName = "The Author need more than 3 letters please make better";
            isValid = false;
        }

        if(this.state.course.category.length < 3) {
            this.state.errors.category = "The title need more than 3 letters please make better";
            isValid = false;
        }

        this.setState({errors: this.state.errors});
        return isValid;
    },

    saveCourse: function (e) {
        e.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({dirty: false});
        toastr.success('Course Saved');
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                errors={this.state.errors}
                onSave={this.saveCourse} />
        );
    }
});

module.exports = manageCoursePage;