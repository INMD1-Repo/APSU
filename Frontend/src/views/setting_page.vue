<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <!--공지사함-->
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
        style="font-size: 0.8em; text-align: center"
        >기타 수정은 간부님에게 문의해주기 바람니다.</v-alert
      >
      <v-img
        style="position: relative; z-index: 1"
        class="white--text align-end"
        height="200px"
        max-width="94vw"
        src="../../src/assets/image/4997689.jpg"
      >
      </v-img>
      <div style="position: relative; z-index: 2">
        <a style="font-size: 0.6rem" href="http://www.freepik.com"
          >Designed by Freepik</a
        >
        <v-row justify="center">
          <!--구역 묶기-->
          <div>
            <!--프로필 이미지-->
            <v-avatar
              style="margin-top: -4em"
              color="surface-variant"
              size="8em"
            >
              <!--사진이 등록이 되어 있자 않으면 사진 안뜨게 하기 v-if -->
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img>
              <!--사진이 등록이 되어 있으면 사진 뜨기-->
            </v-avatar>
            <!--자기이름-->
            <h2 style="text-align: center">namd</h2>
            <!--자기소속-->
            <p style="text-align: center">test</p>
          </div>
        </v-row>
      </div>
      <!--설정 가능한 카드 제공-->
      <v-expansion-panels>
        <v-expansion-panel>
          <!--타이틀-->
          <v-expansion-panel-header> 비밀번호 변경 </v-expansion-panel-header>
          <!--내부 내용-->
          <v-expansion-panel-content>
            <h6>기존 비밀번호</h6>
            <v-text-field label="기존비밀번호"></v-text-field>
            <br />
            <h6>새 비밀번호</h6>
            <v-text-field label="새비밀번호"></v-text-field>
            <v-text-field label="비밀번호 확인"></v-text-field>
            <v-btn elevation="2">Sumit</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <!--타이틀-->
          <v-expansion-panel-header> 사진변경 </v-expansion-panel-header>
          <!--내부 내용-->
          <v-expansion-panel-content>
            <v-file-input
              accept="image/*"
              label="이곳을 누려 사진을 선택해주세요."
            ></v-file-input>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <br />
      <p style="font-size: 0.6rem">Version 0.0.1 Beta</p>
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
