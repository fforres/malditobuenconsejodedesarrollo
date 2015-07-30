'use strict';
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Body = require('../consejo/body.jsx');
var TopBar = require('../topbar/topbar.jsx');
module.exports =  React.createClass({
  render: function() {
        return (
	        <div className="main-container">
	        	<TopBar/>
	        	<RouteHandler/>
			</div>
		)
    }
})
