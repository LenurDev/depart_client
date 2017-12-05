import React, { Component } from 'react';
import { addEmployee } from '../../actions/employeeActions';
import { loadDepartments } from '../../actions/departmentActions';
import { connect } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import validateForm from '../../validations/employee';
import isObject from 'lodash/isObject';
import classNames from 'classnames';
import PropTypes from 'react-proptypes';
import api from '../../api';

class EmployeeForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            department: '',
            isLoading: false,
            errors: {},
        };
    }

    componentWillMount(){
        const {props} = this;

        props.loadDepartments();

        if (props.isEdit) {
            api.loadEmployee(props.employeeId)
                .then((res) => {
                    this.setState({
                        firstName: res.data.firstName,
                        lastName: res.data.lastName
                    });
                    api.loadDepartment(res.data.departmentId)
                        .then((res) => {
                            if (isObject(res.data)) {
                                this.setState({
                                    department: res.data
                                })
                            }
                        });
                });
        }
    }

    isValid(){
        const { errors, isValid } = validateForm(this.state);

        if (!isValid){
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit = (e) => {
        const {props, state} = this;

        e.preventDefault();
        if (this.isValid()){
            this.setState({ errors: [], isLoading: true });

            let model = {
                firstName: state.firstName,
                lastName: state.lastName,
                departmentId: state.department.id,
            };

            if (props.isEdit) {
                model.id = props.employeeId;
                  api.editEmployee(model)
                    .then(res => props.history.push('/employees'))
                    .catch(err => {
                      this.setState({ errors: err.response.data.errors, isLoading: false });
                    });
            } else {
              props.addEmployee(model)
                .then(res => props.history.push('/employees'))
                .catch(err => {
                  this.setState({ errors: err.response.data.errors, isLoading: false });
                });
            }
        }
    };

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChangeDepartment = (department) => {
        this.setState({
            department: department[0]
        });
    };

    cancel = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.history.push('/employees');
    };

    render() {
        const {props, state} = this;
        return (
            <form onSubmit={this.onSubmit}>
                <div className={classNames('form-group', { 'has-error': state.errors['firstName']})}>
                    <label>First Name</label>
                    <input className="form-control" name="firstName" placeholder="Please enter first name" value={state.firstName} onChange={this.onChange}/>
                </div>
                <div className={classNames('form-group', { 'has-error': this.state.errors['lastName']})}>
                    <label>Last Name</label>
                    <input className="form-control" name="lastName" placeholder="Please enter last name" value={state.lastName} onChange={this.onChange}/>
                </div>
                <div className={classNames('form-group', { 'has-error': this.state.errors['department']})}>
                    <label>Department</label>
                    <Typeahead options={props.departments}
                               placeholder="Please enter department name"
                               labelKey="name"
                               value={state.department}
                               selected={[state.department]}
                               onChange={this.onChangeDepartment}
                    />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">{props.isEdit ? 'Edit' : 'Add'}</button>&nbsp;
                            <button className="btn btn-default" onClick={this.cancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

EmployeeForm.propTypes = {
    departments: PropTypes.array.isRequired,
    addEmployee: PropTypes.func.isRequired,
    loadDepartments: PropTypes.func.isRequired
};

export default connect( state => {
    return {
        departments: state.departments
    }
}, { addEmployee, loadDepartments })(EmployeeForm);
