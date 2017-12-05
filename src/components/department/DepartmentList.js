import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import DepartmentListItem from './DepartmentListItem';
import { loadDepartments } from '../../actions/departmentActions';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';

class DepartmentList extends PureComponent {

    componentWillMount(){
        this.props.loadDepartments();
    }

    getContext() {
        let context;
        const {departments} = this.props;
        if (departments.length) {
            context = (
                <table className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline">
                    <thead>
                      <tr>
                          <th>#ID</th>
                          <th>Name</th>
                          <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((department, i) => <DepartmentListItem department={department} key={i} />)}
                    </tbody>
                </table>
            );
        } else {
            context = <h3>No departments</h3>
        }

        return context;
    }

    render() {
        return (
            <div>
                <h1>Department List
                    <Link to="/add-department" className="btn btn-primary btn-outline pull-right" >
                        <i className="fa fa-plus"></i> Add department
                    </Link>
                </h1>
                {this.getContext()}
            </div>
        );
    }
}

DepartmentList.propTypes = {
    departments: PropTypes.array.isRequired,
    loadDepartments: PropTypes.func.isRequired
};

export default connect(
    (state) => {
        return {
          departments: state.departments
        };
    },
    { loadDepartments }
)(DepartmentList);
