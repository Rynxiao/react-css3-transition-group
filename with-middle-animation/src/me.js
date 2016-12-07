'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

const Me = React.createClass({

	onRedirect(route) {
		let { push } = this.props;
		push(route);
	},

	onBack() {
		let { back } = this.props;
		back();
	},

	render() {
		return (
			<div className="me">
				<h1><Link onClick={this.onBack}>返回</Link></h1>
				<Link onClick={this.onRedirect.bind(this, '/')}>APP</Link>
				<br />
				<Link onClick={this.onRedirect.bind(this, 'about')}>ABOUT</Link>
				<br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
				me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />me <br />
			</div>
		);
	}
});

export default AnimateView(Me);