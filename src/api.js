import axios from 'axios';

export function addDepartment (name) { return () => axios.post('/api/departments', { name })}
export function editDepartment( data ) { return () => axios.put(`/api/departments/${data.id}`, data)}
export function loadDepartment( id ) { return () => axios.get(`/api/departments/${id}`)}

export function loadEmployee( id ) { return () => axios.get(`/api/employees/${id}`)}
export function editEmployee (data) { return () => axios.put(`/api/employees/${data.id}`, data)}
