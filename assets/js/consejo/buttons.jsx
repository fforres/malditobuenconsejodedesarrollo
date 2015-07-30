var React = require('react');
module.exports =  React.createClass({
  render: function() {
        return (
        <div className="Btns">
        	<a href="#" className="button"><i className="icon fa fa-fw fa-share"></i><span className="text">Compartir</span></a>
        	<a href="/#/random" className="button"><i className="icon fa fa-fw fa-random"></i><span className="text">Random</span></a>
        	<a href="#" className="button"><i className="icon fa fa-fw fa-plus-square-o"></i><span className="text">Nuevo</span></a>
		</div>
		)
    }
})
