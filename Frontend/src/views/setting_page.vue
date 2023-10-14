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
        style="font-size: 0.8em"
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
                v-if="
                  this.$store.state.face_url != '' ||
                  this.$store.state.face_url != null
                "
                :src="this.image_base_url + this.$store.state.face_url"
                alt="John"
              ></v-img>

              <v-img v-else src="../assets/image/null.png" alt="John"></v-img>
              <!--사진이 등록이 되어 있으면 사진 뜨기-->
            </v-avatar>
            <!--자기이름-->
            <h2 style="text-align: center">
              {{ this.$store.state.info.korea_name }}
            </h2>
            <!--자기소속-->
            <p style="text-align: center">
              {{ this.$store.state.info.belong }}
            </p>
          </div>
        </v-row>
      </div>
      <!--설정 가능한 카드 제공-->
      <v-expansion-panels>
        <!-- <v-expansion-panel>
          <v-expansion-panel-header> 비밀번호 변경 </v-expansion-panel-header>
          <v-expansion-panel-content>
            <h6>기존 비밀번호</h6>
            <v-text-field label="기존비밀번호"></v-text-field>
            <br />
            <h6>새 비밀번호</h6>
            <v-text-field label="새비밀번호"></v-text-field>
            <v-text-field label="비밀번호 확인"></v-text-field>
            <v-btn elevation="2">Sumit</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel> -->
        <v-expansion-panel>
          <v-expansion-panel-header> 사진변경 </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-file-input
              clearable="true"
              v-model="imgfile"
              accept="image/*"
              label="이곳을 눌려 사진을 선택해주세요."
            ></v-file-input>
            <v-btn small @click="image_upload()" elevation="2">업로드</v-btn>
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
import axios from "axios";
export default {
  setup() {
    return {
      image_base_url: process.env.VUE_APP_ALL,
      imgfile: null,
    };
  },
  methods: {
    //파일 업로드간 서버에 파일명
    //중복 같은거 다 확인 해준다.
    async image_upload() {
      //사진 업로드를 위한 사전 지정
      const formData = new FormData();
      console.log(this.imgfile);
      formData.append("files", this.imgfile, this.imgfile.name);
      console.log(this.imgfile);
      //파일 업로드 할때 이것도 적용하기
      //이건 민감하기 떄문에 한번더 정보를 받아온다.
      let local_info = await axios.get(
        process.env.VUE_APP_ALL + "/api/users/me",
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.usertoken,
          },
        }
      );
      try {
        //사진 우선 업로드
        let image_update = await axios.post(
          process.env.VUE_APP_ALL + "/api/upload",
          formData,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.usertoken,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        local_info.data.face_image_url = image_update.data[0].url;
        //사진저장경로 변경
        await axios.put(
          process.env.VUE_APP_ALL + "/api/users/" + local_info.data.id,
          local_info.data,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.usertoken,
              "Content-Type": "application/json",
            },
          }
        );
        // this.$store.commit("face_url", user_info.data.user.face_image_url)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
