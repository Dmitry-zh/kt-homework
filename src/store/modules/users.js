const state = {
    users: {

    }
};

const getters = {
    users: state => state.users
};

const mutations = {
    'SET_USERS' (state, users) {
        state.users = users
    }
};

const actions = {
    commitUsers: ({commit}, db) => {
        commit('SET_USERS', db);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}