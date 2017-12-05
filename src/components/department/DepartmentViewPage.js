import React, {Component} from "react";
import api from "../../api";

export default class DepartmentViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    componentWillMount() {
        api.loadDepartment(this.props.match.params.id)
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
