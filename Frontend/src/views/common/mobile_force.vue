<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="20vh"
        max-width="94vw"
        src="https://picsum.photos/id/11/500/300"
        style="margin-bottom: 3vh"
      ></v-img>
      <!--'간부용에만 표시됨'-->
      <div v-if="this.$store.state.showcode == 'executive'">
        <v-alert border="top" colored-border type="info" elevation="2">
          간부는 대대 유동병력 페이지를 볼수 있습니다.
          <a href="/user/a_gps">보러가기</a>
        </v-alert>
        <div style="display: flex; margin-bottom: 1vh;">
          <h2>유동병력 신청 현황</h2>
          <v-spacer></v-spacer>
          <v-btn href="/user/app_status">더보기</v-btn>
        </div>
        <v-card style="height: 20vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle>분과: XXX 특기 : XXX</v-list-item-subtitle>
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>대기</v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
      <!--용사용-->
      <div v-if="this.$store.state.showcode == 'Veterans'">
        <h2 style="margin-bottom: 2vh">유동병력 신청 진행</h2>
        <v-card style="height: 45vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle>분과: XXX 특기 : XXX</v-list-item-subtitle>
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>진행중</v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              style="margin-top: 1vh; width: 94vw"
            >Open Dialog</v-btn>
          </template>
          <v-card>
            <!--title-->
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <!--body-->
            <v-alert style="margin: 2vh" type="error">이건 오류나면 표시가 됨니다.</v-alert>
              <!--찐 body-->
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3">Name of step 3</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
                    <v-btn color="primary" @click="e1 = 2">다음</v-btn>
                    <v-btn text @click="dialog = false">취소</v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
                    <v-btn color="primary" @click="e1 = 3">다음</v-btn>
                    <v-btn text @click="dialog = false">취소</v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
                    <v-btn color="primary" @click="e1 = 1">다음</v-btn>
                    <v-btn text @click="dialog = false">취소</v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
          </v-card>
        </v-dialog>
      </div>
      <!--'간부용에만 표시됨'-->
      <div v-if="this.temp == 0">
        <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh;">
          <h2>유동병력 승인/거절</h2>
          <v-spacer></v-spacer>
          <v-btn href="/user/app_record">더보기</v-btn>
        </div>
        <v-card style="height: 18vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle>분과: XXX 특기 : XXX</v-list-item-subtitle>
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>거절</v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 8vh"></div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      temp: 0,
      e1: 1,
      dialog: false,
      notifications: false,
      widgets: false,
    };
  },
};
</script>
