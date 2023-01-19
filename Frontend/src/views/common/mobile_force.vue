<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="10vh"
        max-width="94vw"
        src="https://picsum.photos/id/11/500/300"
        style="margin-bottom: 3vh"
      ></v-img>
      <!--'간부용에만 표시됨'-->
      <div v-if="this.temp == 0">
        <v-alert border="top" colored-border type="info" elevation="2">
        간부는 대대 유동병력 페이지를 볼수 있습니다.
        <a href="/user/a_gps">보러가기</a>
        </v-alert>
      </div>
      <div style="display: flex; margin-bottom: 1vh;">
        <h2>유동병력 신청 현황</h2>
        <v-spacer></v-spacer>
        <v-btn>더보기</v-btn>
      </div>
      <v-card style="height: 20vh; width: 94vw; overflow: auto">
        <v-list>
          <v-list-item v-for="item in 10" :key="item">
            <v-list-item-content>
              <v-list-item-title>병사 XXX</v-list-item-title>
              <v-list-item-subtitle>분과: XXX 특기 : XXX</v-list-item-subtitle>
              <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon> 대기 </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
      <!--용사용-->
      <div v-if="this.temp == 1">
        <h2>유동병력 신청 현황</h2>
        <v-card style="height: 45vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle
                  >분과: XXX 특기 : XXX</v-list-item-subtitle
                >
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon> 대기 </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
        <v-btn style="margin-top: 2vh; width: 94vw">유동병력 신청</v-btn>
      </div>
      <!--'간부용에만 표시됨'-->
      <div v-if="this.temp == 0">
        <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh;" >
        <h2>유동병력 승인/거절 기록</h2>
        <v-spacer></v-spacer>
        <v-btn>더보기</v-btn>
      </div>
        <v-card style="height: 18vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle
                  >분과: XXX 특기 : XXX</v-list-item-subtitle
                >
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon> 거절 </v-list-item-icon>
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
    };
  },
};
</script>
