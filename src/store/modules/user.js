const state = {
    user: {
        info: {
            login: '???',
            firstname: '???',
            surname: '???',
            bio: '???',
            website: '???',
            avatarSrc: './static/stories/user.jpg',
        },
        name() {
            return this.info.firstname + " " + this.info.surname;
        },
        followers: 0,
        following: 0,
        publications: 0,
        photos: {
            profile: [
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png',
                './static/profile/profile.png'
            ],
            tagged: [{
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
                {
                    src: './static/profile/tagged.png',
                    authorId: 123,
                },
            ]
        }
    }
};

const getters = {
    user: state => state.user,
    userPhotos: state => state.user.photos.profile,
    taggedPhotos: state => state.user.photos.tagged
};

const actions = {
    changeUserInfo: ({commit}, newInfo) => {
        commit('mutateUserInfo', newInfo);
    },
};

const mutations = {
    mutateUserInfo(state, newInfo) {
        state.user.info = newInfo;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}