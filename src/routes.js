"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')} >
        <DefaultRoute handler={require('./components/homePage')} />
        <NotFoundRoute handler={require('./components/notFoudPage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Redirect from="awthors/*" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;