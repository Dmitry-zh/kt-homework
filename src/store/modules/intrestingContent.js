const state = {
    imgs: [],
    interests: [
        "IGTV",
        "Магазин",
        "Фильмы",
        "Музыка",
        "Видеоигры",
        "Еда",
        "Мода",
        "Природа",
        "Наука"
      ]
}

const getters = {
    interests: state => state.interests,
    imgs: state => state.imgs
}

const actions = {
    newImgs: ({commit}, payload) => {
        commit('addImgs', payload)
    },
    delImgs: ({commit}) => {
        commit('clearImgs')
    }
};

const mutations = {
    addImgs(state, arr) {
        state.imgs.push(arr);
    },
    clearImgs(state) {
        state.imgs = [];
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}