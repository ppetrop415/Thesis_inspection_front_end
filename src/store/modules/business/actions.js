import Business from "../../../services/BusinessDataService";

export default {
    async getBusinesses({ commit }) {
        await Business.getAll()
        .then(response => {
            commit('SET_BUSINESSES', response.data);
        })
        .catch((e) => {
            console.log(e);
        });
        
    },
    async fetchBusiness({commit}, slug) {
        await Business.get(slug).then(response => {
            commit('SET_BUSINESS', response.data)
        }) 
    },
    async searchBusiness({commit}, vat) {
        await Business.findByVat(vat)
        .then(response => {
            commit('SEARCH_BUSINESS', response.data)
        })
        .catch((e) => {
            console.log(e);
        });
    }
};