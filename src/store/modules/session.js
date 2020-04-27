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
    },
    mutateUserAvatar(state, img) {
        state.auth.info.avatarSrc = img
    }
};

const actions = {
    commitSession: ({commit}, userObj) => {
        commit('SET_SESSION', userObj);
    },
    changeUserInfo: ({commit}, info) => {
        commit('mutateUserInfo', info);
    },
    changeAvatar: ({commit}, src) => {
        commit('mutateUserAvatar', src);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}