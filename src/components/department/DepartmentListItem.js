import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDepartment } from '../../actions/departmentActions';
import PropTypes from 'react-proptypes';

class DepartmentListItem extends Component {
    deleteDepartment = () => {
        if (window.confirm('Do you sure that you want to delete?'))
            this.props.deleteDepartment(this.props.department.id);
    };

    render() {
        const { props: { department } } = this;

        return (
            <tr>
                <td className="number">{department.id}</td>
                <td className="content">
                    <Link to={`/view-department/${department.id}`}>
                        {department.name}
                    </Link>
                </td>
                <td className="options">
                    <Link to={`/edit-department/${department.id}`}><i className="fa fa-pencil"></i></Link>&nbsp;
                    <i className="fa fa-trash-o" onClick={this.deleteDepartment}></i>
                </td>
            </tr>
        );
    }
}

DepartmentListItem.propTypes = {
    deleteDepartment: PropTypes.func.isRequired
};

export default connect(null, { deleteDepartment })(DepartmentListItem);

