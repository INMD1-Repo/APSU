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
    now_ip: '',
    face_url: ''
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
    },now_ip : function(state, value) {
      state.now_ip = value
    },face_url : function(state, value) {
      state.face_url = value
    }
  }
})
