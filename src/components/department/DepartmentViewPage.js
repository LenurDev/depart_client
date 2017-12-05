import React, {Component} from "react";
import { loadDepartment } from "../../api";
import {connect} from 'react-redux';
import PropTypes from 'react-proptypes';

class DepartmentViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    componentWillMount() {
        this.props.loadDepartment(this.props.match.params.id)
            .then((res) => {
                this.setState({
                    name: res.data.name
                });
            });
    }

    render() {
        return (
            <h1>{this.state.name}</h1>
        );
    }
}

DepartmentViewPage.propTypes = {
    loadDepartment: PropTypes.func.isRequired
};

export default connect(null, { loadDepartment })(DepartmentViewPage);
