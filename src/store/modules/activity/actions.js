import Activity from "../../../services/ActivitiesDataService";

export default {
	async getActivities({ commit }) {
		await Activity.getAll()
			.then(response => {
				commit('SET_ACTIVITIES', response.data);
			})
			.catch(e => {
				console.log(e)
			});
	},
	async getActivity({commit}, slug) {
		await Activity.get(slug)
		.then(response => {
			commit('SET_ACTIVITY', response.data)
		})
		.catch(e => {
			console.log(e)
		});
	}
}