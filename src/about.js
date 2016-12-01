'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const About = React.createClass({

	goBack() {
		this.props.back();
	},

	push(url) {
		this.props.push(url);
	},

	render() {
		return (
			<div className="about">
				<h1><Link onClick={this.goBack}>返回</Link></h1>
				<Link onClick={this.push.bind(this, '/')}>APP</Link>
				<br />
				<Link onClick={this.push.bind(this, '/me')}>ME</Link>
			</div>
		);
	}
});

function select(state) {
	let transition = state.transitionType.transition || 'forward';
    return {
        transition : transition
    }
}

export default connect(select)(About);