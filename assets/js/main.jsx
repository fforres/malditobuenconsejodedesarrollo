'use strict'
var React = require('react')
var TopBar = require('./topbar/topbar.jsx')
module.exports = React.renderComponent(<TopBar />, document.getElementById('content'))
