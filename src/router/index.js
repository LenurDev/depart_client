/**
 * Created by lenur on 12/4/17.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';

import DepartmentList from '../components/department/DepartmentList';
import DepartmentForm from '../components/department/DepartmentForm';
import DepartmentViewPage from '../components/department/DepartmentViewPage';

import EmployeeList from '../components/employee/EmployeeList';
import EmployeeForm from '../components/employee/EmployeeForm';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={DepartmentList} />
        <Route path="/add-department" exact component={DepartmentForm} />
        <Route path="/edit-department/:id" exact component={DepartmentForm} />
        <Route path="/view-department/:id" exact component={DepartmentViewPage} />

        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/add-employee" exact component={EmployeeForm} />
        <Route path="/edit-employee/:id" exact component={EmployeeForm} />
      </Switch>
    </App>
  </Router>
);

