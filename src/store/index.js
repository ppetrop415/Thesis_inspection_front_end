import Vue from 'vue';
import Vuex from 'vuex';


// Load Vuex
Vue.use(Vuex);

//import modules
import business from './modules/business';
import branchstore from './modules/branchstore'
import activity from './modules/activity';

// Create store
export default new Vuex.Store({
    modules: {
        business,
        branchstore,
        activity,
    }
});