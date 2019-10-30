import { Increment, Decrement } from './actionTypes';

export function incrementAction(state) {
    return {
        type: Increment
    };
}

export function decrementAction(state) {
    return {
        type: Decrement
    };
}