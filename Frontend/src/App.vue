<template>
  <div id="app">
    <!--로그인이 돼지 안을 경우 로그인 페이지를 전체를 뛰운다.-->
    <!--단 사용자가 임의로 로그인 페이지로 갈경우 리다이렉트 생각도 해야한다.-->
    <div v-if="this.$store.state.login_P == 1">
      <v-app id="inspire">
        <!--싱단바-->
        <v-app-bar
          style="border-radius: 25px; margin: 10px; margin-top: 2vh"
          :height="48"
          app
          :color="'#FFFBFE'"
          v-if="this.scroll <= 50"
        >
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title></v-toolbar-title>

          <v-spacer></v-spacer>
          <v-menu style="margin-right: 10vw">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <router-link to="/login">
                <v-list-item @click="logout">
                  <v-list-item-titile>로그아웃</v-list-item-titile>
                </v-list-item>
              </router-link>
              <v-list-item>
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-titile v-bind="attrs" v-on="on"
                      >개발자 정보</v-list-item-titile
                    >
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2"
                      >개발자 정보</v-card-title
                    >
                    <v-card-text>
                      <br />
                      <v-list-item>
                        <v-list-item-content>
                          <h2>INMD1</h2>
                        </v-list-item-content>
                        <v-list-item-avatar
                          tile
                          size="80"
                          color="grey"
                        ></v-list-item-avatar>
                      </v-list-item>
                      <p>풀스택 개발자</p>
                      <div class="text--primary">제발 살려줘</div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        알겟서
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
        <!--슬라이드 메뉴-->
        <v-navigation-drawer
          style="
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
          "
          v-model="drawer"
          absolute
          temporary
          :color="'#FFFBFE'"
        >
          <v-container style="overflow: auto; height: 95vh">
            <!--고정-->
            <v-col class="botten font-left">
              <!--이 부분은 유동적으로 변하게된다.-->
              <h3>부대 운영 관리 유틸리티</h3>
            </v-col>
            <v-col>
              <!--현재 로그인된 사람의 관등성명-->
              <p style="font-weight: bold; font-size: 1.1  rem;">
                {{ this.$store.state.info.belong }} 
                {{ this.$store.state.info.class }} 
                {{ this.$store.state.info.korea_name }}
              </p>
              <!--버튼 같은걸 생성 해볼까?-->
            </v-col>
            <v-col class="font-left">
              <h3>많이 보는 페이지</h3>
            </v-col>
            <v-list-item
              v-for="item in setup_data[this.$store.state.showcode].navebar
                .most"
              :key="item.name"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  ><a style="color: #000000" :href="item.link">{{
                    item.name
                  }}</a></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav></v-list>
            <v-col class="font-left">
              <h3>유동병력</h3>
            </v-col>
            <v-list-item
              v-for="item in setup_data[this.$store.state.showcode].navebar
                .history"
              :key="item"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  ><a style="color: #000000" :href="item.link">{{
                    item.name
                  }}</a></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-col class="font-left">
              <h3>식단관리</h3>
            </v-col>
            <v-list-item
              v-for="item in setup_data[this.$store.state.info.showcode].navebar
                .food"
              :key="item.name"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  ><a style="color: #000000" :href="item.link">{{
                    item.name
                  }}</a></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <!--유동적으로 전환-->
          </v-container>
        </v-navigation-drawer>
        <!--콘텐츠가 보이는 곳-->
        <v-main>
          <router-view></router-view>
        </v-main>
        <!--하단 메뉴바-->
        <v-bottom-navigation
          style="position: fixed; bottom: 0"
          color="primary"
          grow
          :height="66"
        >
          <v-btn :href="'/user/main'">
            <span>홈</span>
            <v-icon>fa-home</v-icon>
          </v-btn>

          <v-btn :href="'/user/mobile_force'">
            <span>유동병력</span>
            <v-icon>fa-clipboard</v-icon>
            <!--알림이 없을떄는 display none을 기본적으로 설정을 해놓는다.-->
            <v-badge content="6" offset-y="10"></v-badge>
          </v-btn>

          <v-btn :href="'/user/food_main'">
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import setup from "@/assets/setup.json";
export default {
  data: () => ({
    //return {}
    drawer: false,
    group: null,
    setup_data: setup,
    dialog: false,
    scroll: 0,
  }),
  mounted() {
    console.log(this.$store.state);
    if (window.localStorage.getItem("login") == null) {
      window.localStorage.setItem("login", "0");
    }
    if (this.$store.state.login_P != 1) {
      this.$router.push({ path: "login" });
    } else if (window.location.href.indexOf("/user") === -1) {
      this.$router.push({ path: "/user/main" });
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    handleScroll() {
      this.scroll = window.pageYOffset;
    },
    logout() {
      this.$store.commit("login_set", 0);
      window.localStorage.setItem("login", "0");

      //내부데이터 초기화
      this.$store.commit("info", "")
          this.$store.commit("usertoken", "")
          this.$store.commit("showcode", "")
    },
  },
};
</script>
