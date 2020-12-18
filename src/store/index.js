import Vuex from 'vuex';
import Vue from 'vue';



import business from './modules/business';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
      business
    }
});