import axios from 'axios';

export default {
  addDepartment:  (name) => axios.post('/api/departments', { name }),
  editDepartment: (data) => axios.put(`/api/departments/${data.id}`, data),
  loadDepartment: (id) => axios.get(`/api/departments/${id}`),
  loadEmployee: (id) => axios.get(`/api/employees/${id}`),
  editEmployee: (data) => axios.put(`/api/employees/${data.id}`, data)
}
