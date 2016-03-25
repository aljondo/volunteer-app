import React from 'react';
import ReactDOM from 'react-dom';
import {Panel, Table} from 'react-bootstrap';
var LogHoursButton = require('./Button.jsx')

var EventTable = React.createClass({ 
	render: function(){ 

	return(

		<Table fill responsive bordered={false}>
    	<thead> 
    	</thead> 
    	<tbody>
    	<tr>
    		<td> Organization Name </td> 
    	</tr> 
    	<tr> 
    		<td> Time Commitment </td> 
    	</tr> 
    	<tr> 
    		<td> Details </td> 
    	</tr> 
    </tbody> 
    </Table>

		);

	}

});

var EventPanel = React.createClass({
	render: function(){ 
	 
	return (
	<div className="panel panel-primary">
                
            <div className="panel-heading">
                <div className="panel-title pull-left">
              		<h2>Event Name </h2>
              	</div>	
                  <div className='btn-toolbar pull-right'>
               		<LogHoursButton />
               	  </div>
               	  <div className='clearfix'> </div>
            </div>
            
            
           <div className="panel-body">
           <EventTable />
           </div>
    </div>
  );
}
});

module.exports = EventPanel; 
