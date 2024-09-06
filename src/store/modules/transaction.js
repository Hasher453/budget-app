import Vue from 'vue';

const transactionStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'outcome comment',
        id: 2,
      },
    },
    sortedList: {},
  },
  getters: {
    transactionList: ({ list }) => list,
    sortedTransactionList: ({ sortedList }) => sortedList,
  },
  mutations: {
    ADD_TRANSACTION_L(state, transaction) {
      Vue.set(state.list, transaction.id, transaction);
    },
    ADD_TRANSACTION_SL(state, transaction) {
      Vue.set(state.sortedList, transaction.id, transaction);
    },
    DELETE_TRANSACTIONS_ALL(state, id) {
      Vue.delete(state.list, id);
      Vue.delete(state.sortedList, id);
    },
    SET_SORTED_LIST(state, obj) {
      state.sortedList = obj;
    },
    ALIGNMENT_LISTS(state) {
      state.sortedList = state.list;
    },
  },
  actions: {
    addTransactionInList({ commit }, transaction) {
      commit('ADD_TRANSACTION_L', transaction);
    },
    addTransactionInSortedList({ commit }, transaction) {
      commit('ADD_TRANSACTION_SL', transaction);
    },
    deleteTransactions({ commit }, id) {
      commit('DELETE_TRANSACTIONS_ALL', id);
    },
    sortingTransactions({ commit, state }, option) {
      const objTransactions = Object.values(state.list).reduce((acc, item) => {
        if (item.type === option) {
          acc[item.id] = item;
        }
        return acc;
      }, {});
      commit('SET_SORTED_LIST', objTransactions);
    },
    alignmentLists({ commit }) {
      commit('ALIGNMENT_LISTS');
    },
  },
};

export default transactionStore;
