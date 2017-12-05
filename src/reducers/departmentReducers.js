import { DEPARTMENTS_LOADED, DEPARTMENT_DELETED } from '../actions/types';
import Immutable from 'seamless-immutable';

export default ( state = [], action = {} ) => {

    state = Immutable(state);

    switch (action.type) {
        case DEPARTMENTS_LOADED:
            return action.data;
        case DEPARTMENT_DELETED:
            return Immutable.flatMap(state, dep => dep.id === action.id ? [] : dep);
        default:
            return state;
    }
}
