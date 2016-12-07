import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Layout = React.createClass({

    getInitialState() {
        return {
            transitionName : "forward"
        };
    },

    setTransition(type) {
        this.setState({transitionName : type});
    },

	render() {
        return (
            <ReactCSSTransitionGroup 
                className="transition-wrapper"
                component="div" 
                style={{height:'100%'}} 
                transitionName={this.state.transitionName}
                transitionEnterTimeout={200} 
                transitionLeaveTimeout={200}>
                <div key={this.props.location.pathname} style={{position:"absolute", width: "100%", height: '100%'}}>
                    { React.cloneElement(this.props.children || <div />, {
                        setTransition : this.setTransition,
                        transitionName : this.state.transitionName
                    }) }
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

export default Layout;