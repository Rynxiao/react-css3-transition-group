import { combineReducers } from 'redux';
import { SET_TRANSITION_TYPE } from './transitionAction';

const initialState = {
	transition : 'forward'
}

function transitionType(state = initialState, action) {
	switch (action.type) {
		case SET_TRANSITION_TYPE:
			return Object.assign({}, state, { transition : action.transition });
		default:
			return state;
	}
}

const transitionReducers = combineReducers({
	transitionType
});

export default transitionReducers;