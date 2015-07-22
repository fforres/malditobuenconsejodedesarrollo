'use strict';
var React = require('react')
require('./assets/js/main.jsx');
var Hello = require('./assets/js/topbar/Hello.jsx')
React.renderComponent(<Hello />, document.getElementById('content'))
