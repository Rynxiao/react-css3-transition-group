'use strict';

import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({

	goBack() {
		this.props.back();
	},

	push(url) {
		this.props.push(url);
	},

	render() {
		return (
			<div className="home">
				<h1>HOME</h1>
				<Link onClick={this.push.bind(this, '/about')}>ABOUT</Link>
				<br />
				<Link onClick={this.push.bind(this, '/me')}>ME</Link>
			</div>
		);
	}
});

export default Home;