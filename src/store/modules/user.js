const state = {
    user: {
        login: 'login',
        firstName: 'Firstname',
        secondName: 'Secondname',
        name() {
            return this.firstName + " " + this.secondName;
        },
        bio: 'someBiography', 
        avatarSrc: './static/stories/user.jpg',
        followers: 0,
        following: 0,
        publications: 0,
        website: 'www.leningrad.spb.ru',
    }
};

const getters = {
    user: state => state.user,
};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations,
}