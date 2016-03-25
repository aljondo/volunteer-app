import React, { Component } from 'react';
import styles from './event.scss';
var EventPanel = require('./Panel.jsx')
//import { Panel } from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css') ;
// function handleClick() {
//   alert('You have clicked on me');
// }

// const panelInstance = (
//   <Panel onClick={ handleClick }>
//     Basic panel example
//   </Panel>
//<button className="btn btn-default pull-right">New</button>
// );
      // <div className="panel panel-default">
      //       <div className="panel-heading">
      //           <h3 className="panel-title pull-left">
      //         With short text it works great
      //             </h3>
      //          <LogHoursButton />
      //           <div className="clearfix"></div>
      //       </div>
      //      <div className="panel-body">Panel content</div>
      //   </div>


// a hello world component
 class Hello extends Component {
  render() {
    return (
		<div>
	   <EventPanel />
		</div>

   );
   }
}

export default Hello
