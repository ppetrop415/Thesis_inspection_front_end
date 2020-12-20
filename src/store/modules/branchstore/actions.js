import Branchstore from "../../../services/BranchstoreDataService";

export default {
    async getBranchstores({ commit }) {
        await Branchstore.getAll()
            .then(response => {
                commit('SET_BRANCHSTORES', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    async getBranchstore({ commit }, slug) {
        await Branchstore.get(slug)
            .then(response => {
                commit('SET_BRANCHSTORE', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    async searchBranchstore({ commit }, vat) {
        await Branchstore.findByVat(vat)
            .then(response => {
                commit('SEARCH_BRANCHSTORE', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
}