var React = require('react');
var Consejo = require('./consejo.jsx');
var Buttons = require('./buttons.jsx');
module.exports =  React.createClass({
  render: function() {
        return (
	        <div className="Body">
	        	<Consejo/>
	        	<Buttons/>
			</div>
		)
    }
})
