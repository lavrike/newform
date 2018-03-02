import axios from 'axios'

export function login() {
    return dispatch => {
        return axios.post('/api/auth', data);
    }
}