import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { changeTransitionType } from './redux/transitionAction';

const Layout = React.createClass({
    back() {
        let { dispatch, router } = this.props;
        dispatch(changeTransitionType('back'));
        router.goBack();
    },

    push(url) {
        let { dispatch, router } = this.props;
        dispatch(changeTransitionType('forward'));
        router.push(url);
    },

	render() {
        return (
            <ReactCSSTransitionGroup 
                className="transition-wrapper"
                component="div" 
                style={{height:'100%'}} 
                transitionName={this.props.transition}
                transitionEnterTimeout={200} 
                transitionLeaveTimeout={200}>
                <div key={this.props.location.pathname} style={{position:"absolute", width: "100%", height: '100%'}}>
                    { React.cloneElement(this.props.children || <div />, {back : this.back, push : this.push}) }
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

function select(state) {
    let transition = state.transitionType.transition || 'forward';
    return {
        transition : transition
    }
}

export default connect(select)(Layout);