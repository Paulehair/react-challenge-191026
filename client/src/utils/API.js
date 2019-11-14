import axios from "axios";

const headers = {
    'Content-Type': 'application/json'
}

const URL = `http://localhost:9000/api/v1`;

export default {
    async login(email, password, role) {
        const response = await axios.post(
            `${URL}/users/login`,
            {
                email,
                password,
                role
            }, { headers }
        )
        localStorage.setItem("token", response.data.token)
        headers.Authorization = localStorage.getItem('token')
        return response.data
    },
    getAllUsers() {
        headers.Authorization = localStorage.getItem('token')
        return axios.get(`${URL}/users`, { 
            headers
        })
    },
    getUser(id) {
        return axios.get(`${URL}/users/${id}`, { 
            headers 
        })
    },
    createUser() {
        return axios.post(`${URL}/add-user`, {
            headers
        })
    },
    updateUser(id, body) {
        headers.Authorization = localStorage.getItem('token')
        return axios.patch(`${URL}/users/${id}`, body, {
            headers
        })
    },
    deleteUser(id) {
        return axios.delete(`${URL}/users/${id}`, {
            headers
        })
    },
    getSkills() {
        return axios.get(`${URL}/skills`, {
            headers
        })
    },
    getSkill(id) {
        return axios.get(`${URL}/skills/${id}`, {
            headers
        })
    },
    createSkill() {
        return axios.post(`${URL}/skills`, {
            headers
        })
    },
    updateSkill(id) {
        return axios.patch(`${URL}/skills/${id}`, {
            headers
        })
    },
    deleteSkill(id) {
        return axios.delete(`${URL}/skills/${id}`, {
            headers
        })
    },
    signup(body) {
        return axios.post(`${URL}/user/signup`, body, { headers: headers });
    },

    isAuth() {
        return localStorage.getItem("token") !== null;
    },
    logout() {
        delete headers.Authorization
        localStorage.clear()
    }
};
