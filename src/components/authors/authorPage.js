"use strict";

var React = require('react');
var AuthorsApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({ authors: AuthorsApi.getAllAuthors() });
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;