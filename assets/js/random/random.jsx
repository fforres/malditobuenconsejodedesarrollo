'use strict';
var React = require('react');

var Body = require('../consejo/body.jsx');
module.exports =  React.createClass({
  render: function() {
        return (
	        <div className="container">
	        	<h1>Random</h1>
	        	<Body/>
			</div>
		)
    }
})
