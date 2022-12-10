import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex);

export default new vuex.Store({
  state :{
    login_P : 1,
    name: '',
    showcode: '',
    usertoken: ''
  },
  mutations: {
    login_set : function (state, value) {
      state.login_P = value
    },
  }
})
