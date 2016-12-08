'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

import { Nav, NavItem, PageHeader, Jumbotron, Button, Panel, Table, Carousel, Well, ButtonToolbar,
	Popover, OverlayTrigger } from 'react-bootstrap';

const popoverClick = (
  	<Popover id="popover-trigger-click" title="Popover bottom">
    	<strong>Holy guacamole!</strong> Check this info.
  	</Popover>
);

const popoverFocus = (
  	<Popover id="popover-trigger-focus" title="Popover bottom">
    	<strong>Holy guacamole!</strong> Check this info.
  	</Popover>
);

const popoverClickRootClose = (
  	<Popover id="popover-trigger-click-root-close" title="Popover bottom">
    	<strong>Holy guacamole!</strong> Check this info.
  	</Popover>
);

const Home = React.createClass({
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

	render() {
		return (
			<div className="home">
				<PageHeader>Home <small>CSS3 Transition Group</small></PageHeader>
				<Panel>
				    <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
					    <NavItem eventKey={1} href="/">Home</NavItem>
					    <NavItem eventKey={2} title="About">About</NavItem>
					    <NavItem eventKey={3}>Me</NavItem>
					</Nav>
				</Panel>
				<Well>Home Page - CSS3 Transition Group</Well>
				<Panel>
					<ButtonToolbar>
					    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
					      	<Button>Click</Button>
					    </OverlayTrigger>
					    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
					      	<Button>Focus</Button>
					    </OverlayTrigger>
					    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
					      	<Button>rootClose</Button>
					    </OverlayTrigger>
				  	</ButtonToolbar>
				</Panel>
			</div>
		);
	}
});

export default AnimateView(Home);