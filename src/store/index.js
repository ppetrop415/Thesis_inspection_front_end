import Vue from 'vue';
import Vuex from 'vuex';


// Load Vuex
Vue.use(Vuex);

//import modules
import business from './modules/business';

// Create store
export default new Vuex.Store({
    modules: {
      business
    }
});