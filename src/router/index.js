/**
 * Created by lenur on 12/4/17.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';

import DepartmentList from '../components/department/DepartmentList';
import DepartmentAddPage from '../components/department/DepartmentForm';
import DepartmentEditPage from '../components/department/DepartmentEditPage';
import DepartmentViewPage from '../components/department/DepartmentViewPage';

import EmployeeList from '../components/employee/EmployeeList';
import EmployeeAddPage from '../components/employee/EmployeeAddPage';
import EmployeeEditPage from '../components/employee/EmployeeEditPage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={DepartmentList} />
        <Route path="/add-department" exact component={DepartmentAddPage} />
        <Route path="/view-department/:id" exact component={DepartmentViewPage} />
        <Route path="/edit-department/:id" exact component={DepartmentEditPage} />

        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/add-employee" exact component={EmployeeAddPage} />
        <Route path="/edit-employee/:id" exact component={EmployeeEditPage} />
      </Switch>
    </App>
  </Router>
);

