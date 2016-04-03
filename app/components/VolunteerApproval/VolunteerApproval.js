import React, { Component } from 'react';
import './appro.css';
import { Panel } from 'react-bootstrap';
import MultiCarousel from '../MultiItemCarousel/MultiItemCarousel';

class EventInfo extends Component {

	render() {
		return(
			<div id="top"> 
				<div id="eventinfo">
					<Panel>
						<h3> EVENT NAME THO </h3> <br/>
						<h5> Location &#47;&#47; date </h5>
					</Panel>
				</div>
				<div id="hourinfo">
					<Panel>
						<h3> # &#47; # </h3> <br/>
						<h5> Volunteers approved </h5>
					</Panel>
				</div>
			</div>
		);
	}
}


class VolunteerApproval extends Component {

	render() {
		return (
			<div>
				<EventInfo />
				<div id="carousel">
					<MultiCarousel />
				</div>
			</div>
		);
	}
}

export default VolunteerApproval;