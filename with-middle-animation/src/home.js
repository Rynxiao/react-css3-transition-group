'use strict';

import React from 'react';
import { Link } from 'react-router';
import AnimateView from './AnimateView';

const Home = React.createClass({

	onRedirect(route) {
		let { push } = this.props;
		push(route);
	},

	render() {
		return (
			<div className="home">
				<h1>HOME</h1>
				<Link onClick={this.onRedirect.bind(this, 'about')}>ABOUT</Link>
				<br />
				<Link onClick={this.onRedirect.bind(this, 'me')}>ME</Link>
				<br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
				home <br />home <br />home <br />home <br />home <br />home <br />home <br />
			</div>
		);
	}
});

export default AnimateView(Home);