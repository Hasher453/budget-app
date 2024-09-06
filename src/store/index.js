import Vue from 'vue';
import Vuex from 'vuex';
import transaction from './modules/transaction';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    transaction,
  },
});
