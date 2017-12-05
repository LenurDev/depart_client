import React from 'react';
import EmployeeForm from './EmployeeForm';

export default (props) => (
  <EmployeeForm {...props} isEdit={true} employeeId={props.match.params.id}/>
)
