import vuex from 'vuex'
import Vue from 'vue'
import {createVuexPersistedState} from "vue-persistedstate";

Vue.use(vuex);

export default new vuex.Store({
  plugins: [createVuexPersistedState()],
  state :{
    login_P : window.localStorage.getItem("login"),
    //로그인 정보 데이터
    info: '',
    usertoken: '',
    //간부 용사 분리
    showcode: '',
  },
  mutations: {
    login_set : function (state, value) {
      state.login_P = value
    },
    info : function (state, value) {
      state.info = value
    },
    usertoken : function (state, value) {
      state.usertoken = value
    },
    showcode : function (state, value) {
      state.showcode = value
    },
  }
})
