import AuthService from "../../../services/AuthDataService"

export default {
    async login({ commit }, user) {
        await AuthService.login(user)
            .then(user => {
                commit('LOGIN_SUCCESS', user);
                return Promise.resolve(user);
            }, error => {
                commit('LOGIN_FAILURE');
                return Promise.reject(error);
            }
        );
    },
    async logout({commit}) {
        await AuthService.logout();
        commit('LOGOUT');
    },
    async register({commit}, user) {
        await AuthService.register(user)
            .then(response => {
                commit('REGISTER_SUCESS');
                return Promise.resolve(response.data);
            },
            error => {
                commit('REGISTER_FAILURE');
                return Promise.reject(error);
            }
        );
    }
}
