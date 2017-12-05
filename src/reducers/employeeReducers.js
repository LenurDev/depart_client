import { EMPLOYEES_LOADED, EMPLOYEE_DELETED } from '../actions/types';
import findIndex from 'lodash/findIndex';

export default ( state = [], action = {} ) => {
    switch (action.type) {
        case EMPLOYEES_LOADED:
            return action.data;
        case EMPLOYEE_DELETED:
            const emIndex = findIndex(state, { id: action.id });
            state.splice(emIndex, 1);
            return [...state];
        default:
            return state;
    }
}
