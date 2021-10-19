/**
 * Vuex Module Data
 */

const data = {
    namespaced: true,

    // State
    state: {
        dataList: [],
        dataItem: {}
    },

    // Mutations
    mutations: {
        setDataList(state, dataList) {
            state.dataList = dataList;
        },

    },

    // Actions
    actions: {
        async readData({ commit }) {
            try {
                const res = await fetch("data/list.json")
                const dts = await res.json();
                commit('setDataList', dts);
            } catch (error) {
                console.log('Error Read Data:', error);
            }
        }

    },

    // Getters
    getters: {
        getDataList(state) {
            return state.dataList;
        },

    }
}

export default data;