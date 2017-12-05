import React, {PureComponent} from "react";
import {connect} from "react-redux";
import EmployeeListItem from './EmployeeListItem';
import { loadEmployees } from '../../actions/employeeActions';
import {Link} from "react-router-dom";
import PropTypes from 'react-proptypes';

class EmployeeList extends PureComponent {
    componentWillMount(){
        this.props.loadEmployees();
    }

    render() {
      const {employees} = this.props;
      let context = "No Employees";

      if (employees.length) {
            context = (
                <table className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline">
                    <thead>
                      <tr>
                          <th>#ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Department</th>
                          <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee, i) => <EmployeeListItem employee={employee} key={i} />)}
                    </tbody>
                </table>
            );
        }

        return (
            <div>
                <h1>Employee List
                    <Link to="/add-employee" className="btn btn-primary btn-outline pull-right" >
                        <i className="fa fa-plus"></i> Add employee
                    </Link>
                </h1>
                {context}
            </div>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    loadEmployees: PropTypes.func.isRequired
};

export default connect(
    (state) => {
        return {
            employees: state.employees
        };
    },
    { loadEmployees }
)(EmployeeList);
