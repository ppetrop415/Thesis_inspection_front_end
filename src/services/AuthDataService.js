import http from "../http-common";

const END_POINT = 'auth/'

export default {
    login(user) {
        return http.post(`${END_POINT}login/`, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    },
    register(user) {
        return http.post(`${END_POINT}register/`, {
            email: user.email,
            password: user.password,
            password2: user.password2,
            first_name: user.first_name,
            last_name: user.last_name,
            member: user.member
        });
    },
    logout() {
        localStorage.removeItem('user');
    }
}