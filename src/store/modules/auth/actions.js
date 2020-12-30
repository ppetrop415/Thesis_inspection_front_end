import AuthService from "../../../services/AuthDataService"

import http from "../../../http-common";


export default {

    userLogin (context, usercredentials) {
        return new Promise((resolve, reject) => {
          http.post('/auth/login/', {
            email: usercredentials.email,
            password: usercredentials.password
          })
            .then(response => {
              context.commit('LOGIN', { access: response.data.access, refresh: response.data.refresh }) 
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        })
      },

    // userLogin (context, user) {
    //     return new Promise((resolve, reject) => {
    //         AuthService.login(user)
    //         .then(response => {
    //           context.commit('LOGIN', response.data) 
    //           resolve()
    //         })
    //         .catch(err => {
    //           reject(err)
    //         })
    //     })
    //   },


    // async userLogin({ commit }, user) {
    //     await AuthService.login(user)
    //         .then(user => {
    //             commit('LOGIN', user);
    //             return Promise.resolve(user);
    //         }, error => {
    //             commit('LOGIN_FAILURE');
    //             return Promise.reject(error);
    //         }
    //     );
    // },

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
