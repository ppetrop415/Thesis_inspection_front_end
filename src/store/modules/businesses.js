
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
            commit('setBusinesses', response.data);
        })
        .catch((e) => {
            console.log(e);
        });
        
    },
    async fetchBusiness({commit}, slug) {
        await Business.get(slug).then(response => {
            commit('setbusiness', response.data)
        }) 
    }
};

const mutations = {
    setBusinesses: (state, businesses) => (state.businesses = businesses),
    setBusiness: (state, business) => (state.businesses = business)
};

export default {
    state,
    getters,
    actions,
    mutations
};