'use strict';

import _react from 'react';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _react2 = _interopRequireDefault(_react);

function _interopRequireDefault( obj ) { 
	return obj && obj.__esModule ? obj : { default: obj }; 
}

export default function(InnerPage) {

	return _react2.default.createClass({

		push(url) {
			let { router } = this.props;
			this.props.setTransition('forward');
			router.push(url);
		},

		back(url) {
			let { router } = this.props;
			this.props.setTransition('back');
			if (url) {
				router.push(url);
			} else {
				router.goBack();
			}
		},
		
		render() {
			return _react2.default.createElement(InnerPage, Object.assign({}, this.state, this.props, {
				push : this.push,
				back : this.back
			}));
		}
	});
};