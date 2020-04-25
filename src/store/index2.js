import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import session from './modules/session'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    session
  },
  plugins: [createPersistedState()],
})
