const state = {
    auth: false
};

const getters = {
    auth: state => state.auth
};

const mutations = {
    'SET_SESSION' (state, user) {
        state.auth = user
    },
    mutateUserInfo(state, info) {
        state.auth.info = info;
    }
};

const actions = {
    commitSession: ({commit}, userObj) => {
        commit('SET_SESSION', userObj);
    },
    changeUserInfo: ({commit}, info) => {
        commit('mutateUserInfo', info);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}