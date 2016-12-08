'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

import { Nav, NavItem, PageHeader, Jumbotron, Button, Panel, Table, Carousel, Well, ButtonToolbar,
	Popover, OverlayTrigger,Form, FormGroup, FormControl, Col, Checkbox, ControlLabel } from 'react-bootstrap';

const About = React.createClass({
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
			<div className="about">
				<PageHeader>About <small>CSS3 Transition Group</small></PageHeader>
				<Panel>
				    <Nav bsStyle="pills" activeKey={2} onSelect={this.handleSelect}>
					    <NavItem eventKey={1} href="/">Home</NavItem>
					    <NavItem eventKey={2} title="About">About</NavItem>
					    <NavItem eventKey={3}>Me</NavItem>
					</Nav>
				</Panel>
				<Form horizontal>
				    <FormGroup controlId="formHorizontalEmail">
				      	<Col componentClass={ControlLabel} sm={2}>
				        	Email
				      	</Col>
				      	<Col sm={10}>
				        	<FormControl type="email" placeholder="Email" />
				      	</Col>
				    </FormGroup>

				    <FormGroup controlId="formHorizontalPassword">
				      	<Col componentClass={ControlLabel} sm={2}>
				        	Password
				      	</Col>
				      	<Col sm={10}>
				        	<FormControl type="password" placeholder="Password" />
				      	</Col>
				    </FormGroup>

				    <FormGroup>
				      	<Col smOffset={2} sm={10}>
				        	<Checkbox>Remember me</Checkbox>
				      	</Col>
				    </FormGroup>

				    <FormGroup>
				      	<Col smOffset={2} sm={10}>
				        	<Button type="submit">
				          		Sign in
				        	</Button>
				      	</Col>
				    </FormGroup>
				</Form>
				<Panel>
			  		<Button bsStyle="link" onClick={this.onBack}>&#x3c;- 返回</Button>
				</Panel>
			</div>
		);
	}
});

export default AnimateView(About);