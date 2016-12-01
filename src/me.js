'use strict';

import React from 'react';
import { Link } from 'react-router';

const Me = React.createClass({

	goBack() {
		this.props.back();
	},

	push(url) {
		this.props.push(url);
	},

	render() {
		return (
			<div className="me">
				<h1><Link onClick={this.goBack}>返回</Link></h1>
				<Link onClick={this.push.bind(this, '/')}>APP</Link>
				<br />
				<Link onClick={this.push.bind(this, '/about')}>ABOUT</Link>
			</div>
		);
	}
});

export default Me;