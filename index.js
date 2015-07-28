'use strict';
var React = require('react');
//require('./assets/js/main.jsx');
var Hello = require('./assets/js/topbar/Hello.jsx');
var Main = React.createClass({
    render: function() {
        return <div > Hello React < /div>
    }
});
React.render( < Hello / > , document.getElementById('app'));
