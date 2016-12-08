'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

import { Nav, NavItem, PageHeader, Jumbotron, Button, Panel, Table, Carousel, Well, ButtonToolbar,
	Popover, OverlayTrigger } from 'react-bootstrap';

const Me = React.createClass({
	handleSelect(selectedKey) {

		let { push } = this.props, router;

		switch(selectedKey) {
			case 1: 
				router = '/';
				break;
			case 2:
				router = 'about';
				break;
			case 3:
				router = 'me';
				break;
			default:
				break;
		}

		push(router);
	},

	onBack() {
		this.props.back();
	},

	render() {
		return (
			<div className="me">
				<PageHeader>Me <small>CSS3 Transition Group</small></PageHeader>
				<Panel>
				    <Nav bsStyle="pills" activeKey={3} onSelect={this.handleSelect}>
					    <NavItem eventKey={1} href="/">Home</NavItem>
					    <NavItem eventKey={2} title="About">About</NavItem>
					    <NavItem eventKey={3}>Me</NavItem>
					</Nav>
				</Panel>
				<Table striped bordered condensed hover>
				    <thead>
				      	<tr>
				        	<th>#</th>
				        	<th>First Name</th>
				        	<th>Last Name</th>
				        	<th>Username</th>
				      	</tr>
				    </thead>
				    <tbody>
				      	<tr>
				        	<td>1</td>
				        	<td>Mark</td>
				        	<td>Otto</td>
				        	<td>@mdo</td>
				      	</tr>
				      	<tr>
				        	<td>2</td>
				        	<td>Jacob</td>
				        	<td>Thornton</td>
				        	<td>@fat</td>
				      	</tr>
				      	<tr>
				        	<td>3</td>
				        	<td colSpan="2">Larry the Bird</td>
				        	<td>@twitter</td>
				      	</tr>
				    </tbody>
				</Table>
				<Panel>
					<Button bsStyle="link" onClick={this.onBack}>&#x3c;- 返回</Button>
				</Panel>
			</div>
		);
	}
});

export default AnimateView(Me);