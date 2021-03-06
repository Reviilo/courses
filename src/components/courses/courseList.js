"use strict";

var React = require('react');
var Link = require('react-router').Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var courseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    deleteCourse: function (id, event) {
        event.preventDefault();
        CourseActions.deleteAuthor(id);
        toastr.success('Course Deleted');
    },

    render: function () {
        var createCourseArrow = function (course) {
            return (
                <tr key={course.key}>
                    <td><a href={course.watchHref}>Watch</a></td>
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                    <td>
                        <Link to={"manageCourse"} params={{id: course.id}}>{course.title}</Link>
                    </td>
                    <td id={course.author.id} >{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseArrow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = courseList;