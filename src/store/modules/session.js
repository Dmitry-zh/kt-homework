const state = {
    auth: false
};

const getters = {
    auth: state => state.auth
};

const mutations = {
    'SET_SESSION' (state, login) {
        state.auth = login
    }
};

export default {
    state,
    getters,
    mutations
}