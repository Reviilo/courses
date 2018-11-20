"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        errors: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input 
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />
                
                <Input 
                    name="watchHref"
                    label="Watch Href"
                    value={this.props.course.watchHref}
                    onChange={this.props.onChange}
                    error={this.props.errors.watchHref} />
                
                <Input 
                    name="author"
                    label="Author"
                    value={this.props.course.author.name}
                    onChange={this.props.onChange}
                    error={this.props.errors.authorName} />

                <Input 
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />

                <Input 
                    name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />

            </form>
        );
    }
});

module.exports = CourseForm;