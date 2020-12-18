
import Business from "../../services/BusinessDataService";

const state = {
    businesses: [],
    business: null,
    vat:''
};

const getters = {
    allBusinesses: state => state.businesses,
    business: state => state.business,
    vat: state => state.vat,
};

const actions = {
   async fetchBusinesses({ commit }) {
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

const mutations = {
    SET_BUSINESSES: (state, businesses) => (state.businesses = businesses),
    SET_BUSINESS: (state, business) => (state.businesses = business),
    SEARCH_BUSINESS: (state, business) => (state.business = business),
};

export default {
    state,
    getters,
    actions,
    mutations
};