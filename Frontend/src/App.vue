<template>
  <div id="app">
    <!--로그인이 돼지 안을 경우 로그인 페이지를 전체를 뛰운다.-->
    <!--단 사용자가 임의로 로그인 페이지로 갈경우 리다이렉트 생각도 해야한다.-->
    <div v-if="this.login == 1">
      <v-app id="inspire">
        <!--싱단바-->
        <v-app-bar app :color="'#FFFBFE'">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title></v-toolbar-title>

          <v-spacer></v-spacer>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              </template>
            <v-list>
              <v-list-item>
                <v-list-item-titile>로그아웃</v-list-item-titile>
              </v-list-item>
              <v-list-item>
                <v-list-item-titile>개발자</v-list-item-titile>
              </v-list-item>
              <v-list-item>
                <v-list-item-titile>오픈소스 라이센스</v-list-item-titile>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <!--슬라이드 메뉴-->
        <v-navigation-drawer v-model="drawer" absolute temporary :color="'#FFFBFE'">
          <v-container>
            <!--고정-->
            <v-col class="botten font-left">
              <!--이 부분은 유동적으로 변하게된다.-->
              <h3>부대 운영 관리 유틸리티</h3>
            </v-col>
            <v-col>
              <!--현재 로그인된 사람의 관등성명-->
              <p>X포대 전포대장 중위 XXX</p>
              <!--버튼 같은걸 생성 해볼까?-->
            </v-col>
            <v-col class="font-left">
              <h3>많이 보는 페이지</h3>
            </v-col>
            <v-divider></v-divider>
            <!--유동적으로 전환-->
          </v-container>
        </v-navigation-drawer>
        <!--콘텐츠가 보이는 곳-->
        <v-main>
          <router-view></router-view>
        </v-main>
        <!--하단 메뉴바-->
        <v-bottom-navigation color="primary" grow :height="66">
          <v-btn>
            <span>홈</span>
            <v-icon>fa-home</v-icon>
          </v-btn>

          <v-btn>
            <span>유동병력</span>
            <v-icon>fa-clipboard</v-icon>
            <!--알림이 없을떄는 display none을 기본적으로 설정을 해놓는다.-->
            <v-badge content="6" offset-y="10"></v-badge>
          </v-btn>

          <v-btn>
            <span>식단관리</span>
            <v-icon>fa-utensils</v-icon>
          </v-btn>

          <v-btn>
            <span>설정</span>
            <v-icon>fa-cog</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-app>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: 1, //-> 이값은 어떻게 정할지 진지하게 고민해보자
    drawer: false,
    group: null,
  }),
  mounted() {
    if(this.login != 1){
      this.$router.push({ path: 'login' })
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
} 
</script>