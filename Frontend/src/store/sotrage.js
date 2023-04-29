import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex);

export default new vuex.Store({
  state :{
    login_P : window.localStorage.getItem("login"),
    //로그인 정보 데이터
    id: '',
    name: '',
    usertoken: '',
    //간부 용사 분리
    showcode: 'Veterans',
  },
  mutations: {
    login_set : function (state, value) {
      state.login_P = value
    },
  }
})
