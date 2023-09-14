<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <h1>유동병력 승인 거절</h1>
      <p style="font-size: 0.9rem">
        자신의 포대(중대)에 용사들의 이동 승인을 결정해주는 부분입니다.
      </p>
      <v-card>
        <!--검색바-->
        <v-toolbar flat>
          <v-text-field
            v-model="search_temp"
            @input="search()"
            style="width: 75vw; margin-top: 2vh"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <!--데이터 테이블-->
        <v-card
          v-for="item in force_find"
          v-bind:key="item"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <div v-if="item.attributes.Approval == '대기'">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">ID: {{ item.id }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ item.attributes.Classes + item.attributes.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >이동장소: {{ item.attributes.local }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >신청시각: {{ item.attributes.time }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >특이사항(동행자):
                  {{ item.attributes.significant_text }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >승인여부:
                  {{ item.Approval }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <!--이 밑에 div 묶어 있는건 간부만 볼수 있습-->
            <div style="display: flex">
              <v-card-actions>
                <v-btn
                  @click="
                    (selcet_data = item),
                      application(),
                      (overlay = true),
                      (Approval_text = '승인')
                  "
                  outlined
                  rounded
                  text
                >
                  승인
                </v-btn>
                <v-btn
                  @click="
                    (selcet_data = item),
                      application(),
                      (overlay = true),
                      (Approval_text = '거절')
                  "
                  outlined
                  rounded
                  text
                >
                  거절
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
        <div style="height: 5vh"></div>
      </v-card>
    </v-col>
    <v-overlay :value="overlay">
      <v-alert type="info">
        <h3>정말로 저장하시겟습니까?</h3>
        <p style="font-size: 0.9rem">
          한번 저장하면 다시 변경을 할수 없습니다.
        </p>
        <v-responsive class="border pa-1">
          <h4>[저장목록]</h4>
          <p style="font-size: 0.9rem">심의결과: {{ this.Approval_text }}</p>
        </v-responsive>
        <v-card-actions>
          <v-btn color="orange" @click="data_update"> 저장 </v-btn>
          <v-btn color="orange" @click="overlay = false"> 취소 </v-btn>
        </v-card-actions>
      </v-alert>
    </v-overlay>
  </div>
</template>
<script>
// eslint-disable-next-line
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      search_temp: "", //검색
      selcet_data: "", //선택한 데이터를 따로 저장하는곳
      Approval_text: "", //버튼을 누루면
      overlay: false,
      force_find: [], //가져온 값을 저장한것
      temp: [], //검색결과 데이터 임시저장
    };
  },
  async created() {
    this.force_find = await axios.get(
      process.env.VUE_APP_ALL + "/api/mobile-forces?filters[belong][$eq]=" + this.$store.state.info.belong,
      {
        headers: {
          Authorization: "Bearer " + this.$store.state.usertoken,
        },
      }
    );
    this.force_find = this.force_find.data.data
    console.log(this.force_find);
  },
  methods: {
    search() {
      this.temp = [];
      this.sample.forEach((item) => {
        if (item.name.indexOf(this.search_temp) !== -1) {
          this.temp.push(item);
        }
      });
    },
    application() {
      this.selcet_data.attributes.time = new Date().toLocaleString();
    },
    async data_update() {
      try {
        await axios.put(
          process.env.VUE_APP_ALL + "/api/mobile-forces/" + this.selcet_data.id,
          {
            data: {
              Classes: this.selcet_data.attributes.Classes,
              name: this.selcet_data.attributes.name,
              local: this.selcet_data.attributes.local,
              Approval_time: this.selcet_data.attributes.time,
              Approval:this.Approval_text ,
              Approver:
                this.$store.state.info.korea_name +
                "(" +
                this.$store.state.info.class +
                ")",
            },
          },
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.usertoken ,
              "Content-Type": "application/json",
            },
          }
        );
        await axios.post(
          process.env.VUE_APP_ALL + "/api/app-logers",
          {
            data: {
              body:
                "유동병력신청 결과 요청을 성공적으로 변경함" +
                {
                  Classes: this.$store.state.info.Classes,
                  name: this.$store.state.info.korea_name,
                },
              error_massage: "",
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //알림 숨기는 기능을 하고 있지
        this.overlay = false;
        //새로고침
        router.go();
      } catch (error) {
        await axios.post(
          process.env.VUE_APP_ALL + "/api/app-logers",
          {
            data: {
              body: "유동병력신청 결과 요청이 실패했습니다.",
              error_massage: error,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    },
  },
  async mounted() {
    //건들지 말것!
    this.temp = this.sample;
  },
};
</script>
