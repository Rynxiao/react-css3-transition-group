'use strict';

export const SET_TRANSITION_TYPE = 'SET_TRANSITION_TYPE';

export function changeTransitionType(t) {
    return {
        type : SET_TRANSITION_TYPE,
        transition : t
    }
} 