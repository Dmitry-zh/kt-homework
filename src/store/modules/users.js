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

export default {
    state,
    getters,
    mutations
}