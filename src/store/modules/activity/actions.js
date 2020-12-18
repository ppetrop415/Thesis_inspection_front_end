import Activity from "../../../services/ActivitiesDataService";

export default {
    async getActivities({commit}) {
        await Activity.getAll().then(response => {
            commit('SET_ACTIVITIES', response.data);
        })
        .catch((e) =>{
            console.log(e)
        });
    },
}