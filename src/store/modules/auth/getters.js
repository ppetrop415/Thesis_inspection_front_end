export default {
    loggedIn (state) {
        return state.accessToken != null
    }
}