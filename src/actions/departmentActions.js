import axios from 'axios';
import { DEPARTMENTS_LOADED, DEPARTMENT_DELETED } from './types';

export function loadDepartments( data ) {
    return dispatch => {
        return axios.get('/api/departments', data)
            .then(res => {
                dispatch({
                    type: DEPARTMENTS_LOADED,
                    data: res.data
                });
            });
    }
}

export function deleteDepartment (id) {
    return dispatch => {
        return axios.delete(`/api/departments/${id}`)
            .then(res => {
                dispatch({
                    type: DEPARTMENT_DELETED,
                    id
                });
            });
    }
}
