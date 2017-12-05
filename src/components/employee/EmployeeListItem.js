import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEmployee } from '../../actions/employeeActions';
import PropTypes from 'react-proptypes';

class EmployeesListItem extends Component {
    deleteEmployee = () => {
      const {props} = this;

      if (window.confirm('Do you sure that you want to delete?'))
          props.deleteEmployee(props.employee.id)
    };

    render() {
      const {employee} = this.props;

        return (
            <tr>
                <td className="number">{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.department.name}</td>
                <td className="options">
                    <Link to={`edit-employee/${employee.id}`}>
                        <i className="fa fa-pencil"></i>
                    </Link>&nbsp;
                    <span><i className="fa fa-trash-o" onClick={this.deleteEmployee}></i></span>
                </td>
            </tr>
        );
    }
}

EmployeesListItem.propTypes = {
    deleteEmployee: PropTypes.func.isRequired
};

export default connect(null, { deleteEmployee })(EmployeesListItem);
