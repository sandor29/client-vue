/**
 * Vuex Module Auth
 */
const auth = {
    namespaced: true,

    // State
    state: {
        token: null,
        user: null,
    },
    
    // Mutations
    mutations: {
        setToken(state, token) {
            state.token = token;
        },

        setUser(state, user) {
            state.user = user;
        },
    },

    // Actions
    actions: {
        addToken({ commit }, token) {
            localStorage.setItem('auth-token', token);
            commit('setToken', token);
        },

        addUser({ commit }, user) {
            localStorage.setItem('auth-user', user);
            commit('setUser', user);
        },

        showAuth({ commit }) {
            if (localStorage.getItem('auth-user') && localStorage.getItem('auth-token')) {
                commit('setToken', localStorage.getItem('auth-token'))
                commit('setUser', localStorage.getItem('auth-user'))

            } else {
                logout();
            }
        },

        logout({ commit }) {
            commit('setToken', null);
            localStorage.removeItem('auth-token');

            commit('setUser', null);
            localStorage.removeItem('auth-user');
        }
    },
    
    // Getters
    getters: {
        getToken(state) {
            return state.token;
        },

        getUser(state) {
            return state.user;
        }
    }
}

export default auth