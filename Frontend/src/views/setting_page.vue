<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <!--공지사함-->
      <v-alert
        type="info"
        title="공지"
        text="기타 수정은 간부님에게 문의하시거나 관리자한데 연락해주시기 바람니다."
      ></v-alert>
      <v-img
        style="position: relative; z-index: 1"
        class="white--text align-end"
        height="200px"
        max-width="94vw"
        src="../../src/assets/image/4997689.jpg"
      >
      </v-img>
      <div style="position: relative; z-index: 2; " >
        <a style="font-size: 0.6rem" href="http://www.freepik.com"
          >Designed by Freepik</a
        >
        <v-row justify="center">
            <!--구역 묶기-->
            <div >
            <!--프로필 이미지-->
            <v-avatar style="margin-top: -4em" color="surface-variant" size="8em">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img>
            </v-avatar>
            <!--자기이름-->
            <h2 style="text-align: center;">name</h2>
            <!--자기소속-->
            <p style="text-align: center;">test</p>
          </div>
        </v-row>
      </div>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 4vh"></div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
