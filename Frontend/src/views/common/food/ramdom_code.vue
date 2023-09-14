<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <v-card>
        <v-img
          class="white--text align-end"
          height="200px"
          max-width="94vw"
          src="../../../assets/image/ram_code.jpg"
        >
        </v-img>

        <v-card-title>임의코드</v-card-title>
        <!--코드가 어떻게 보일지 생각할것-->
        <v-card style="margin: 5%">
          <div style="display: table; margin-left: auto; margin-right: auto">
            <v-icon x-large style="padding-top: 2vh; padding-bottom: 2vh"
              >fa-fingerprint</v-icon
            >
          </div>
          <div style="text-align: center; padding-bottom: 5vh">
            <h4>임시 인증코드 생성</h4>
            <p style="font-size: 0.7rem">
              아래에 버튼을 누루면 자동으로 코드를 만들어서 보여줌니다.
            </p>
          </div>
        </v-card>
        <v-card-subtitle>
          ⚠️ 주의사항 안내<br />
          <div style="font-size: 0.6rem">
            코드는 아래에 버튼을 누루면 바로 임의코드가 생성되어서
            활성됨니다.<br />
            임의코드 유효 기간은 1분이며 시간이 만료가 되면 다시 활성화
            해야됩니다.<br />
          </div>
        </v-card-subtitle>
        <v-btn
          color="primary"
          dark
          v-on="on"
          style="margin: 2%; width: 90vw"
          @click="
            (overlay = true), code_post(), (value = 0), (bufferValue = 10)
          "
          >코드 생성하기
        </v-btn>
      </v-card>
      <v-overlay
        v-model="overlay"
        contained
        class="align-center justify-center"
      >
        <v-sheet
          elevation="12"
          min-width="70vw"
          rounded="lg"
          width="90%"
          class="pa-4 text-center mx-auto"
        >
          <v-icon class="mb-5" color="success" size="80"
            >fa-regular fa-circle-check</v-icon
          >

          <h3 class="mb-3">랜덤 코드를 생성했습니다.</h3>
          <p style="font-size: 3rem; font-weight: bold">
            {{ this.ramdom_code }}
          </p>
          <v-progress-linear
            v-model="value"
            :buffer-value="bufferValue"
          ></v-progress-linear>
          <br />
          <p class="mb-4 text-medium-emphasis" style="font-size: 0.4rem">
            이 코드는 5분간 유효됨니다.
            <br />
            다중적으로 오류가 발생하면
          </p>

          <v-divider class="mb-4"></v-divider>

          <div class="text-end">
            <v-btn
              class="text-none"
              color="success"
              rounded
              variant="flat"
              width="90"
              @click="(overlay = !overlay), data_delet()"
            >
              Done
            </v-btn>
          </div>
        </v-sheet>
      </v-overlay>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 4vh"></div>
  </div>
</template>
<script>
// eslint-disable-next-line
import axios from "axios";
export default {
  data: () => {
    return {
      overlay: false,
      ramdom_code: "",
      value: 0,
      bufferValue: 10,
      interval: 0,
      requst_info: 0,
      get_id: "",
    };
  },
  methods: {
    async code_post() {
      //랜덤으로 생성해주는 코드
      function generateRandomCode(n) {
        let str = "";
        for (let i = 0; i < n; i++) {
          str += Math.floor(Math.random() * 10);
        }
        return str;
      }
      this.ramdom_code = generateRandomCode(Math.floor(Math.random() * 3) + 4);
      //타이머 실행
      this.startBuffer();
      //서버로 전송
      this.get_id = await axios.post(
        process.env.VUE_APP_ALL + "/api/food-ramdoms/",
        {
          data: {
            code: this.ramdom_code,
            Auther:
              "(" +
              this.$store.state.info.class +
              ")" +
              this.$store.state.info.korea_name,
            belong: this.$store.state.info.belong,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.usertoken,
          },
        }
      );
      //id저장
      this.get_id = this.get_id.data.data.id
      console.log(this.get_id);
    },
    startBuffer() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.value += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 2000);
    },
    async data_delet() {
      //요청했던 데이터 삭제
      await axios.delete(
       process.env.VUE_APP_ALL + "/api/food-ramdoms/" + this.get_id,
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.usertoken,
          },
        }
      );
    },
  },
  watch: {
    async value(val) {
      if (val < 100) {
        return;
      }

      this.value = 0;
      this.bufferValue = 10;
      this.overlay = false;
      clearInterval(this.interval);
      this.data_delet();
    },
  },
  mounted() {},
};
</script>
