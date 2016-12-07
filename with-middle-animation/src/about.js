'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

const About = React.createClass({

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
			<div className="about">
				<h1><Link onClick={this.onBack}>返回</Link></h1>
				<Link onClick={this.onRedirect.bind(this, '/')}>APP</Link>
				<br />
				<Link onClick={this.onRedirect.bind(this, 'me')}>ME</Link>
				<br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
				about <br />about <br />about <br />about <br />about <br />about <br />
			</div>
		);
	}
});

export default AnimateView(About);