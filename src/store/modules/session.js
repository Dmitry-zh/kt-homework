const state = {
    auth: false
};

const getters = {
    auth: state => state.auth
};

const mutations = {
    'SET_SESSION' (state, user) {
        state.auth = user
    }
};

const actions = {
    commitSession: ({commit}, userObj) => {
        commit('SET_SESSION', userObj);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}