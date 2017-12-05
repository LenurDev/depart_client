import { combineReducers } from 'redux';
import departments from './reducers/departmentReducers';
import employees from './reducers/employeeReducers';

export default combineReducers({
  departments,
  employees
});
