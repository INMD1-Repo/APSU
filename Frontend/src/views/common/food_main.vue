<template>
  <div style="display: table">
    <v-col></v-col>
    <v-col class="food_frame">
      <v-list-item>
        <v-list-item-content>
          <h2>
            즐거운 식사 하세요 !<br />
            {{ this.$store.state.info.class }}
            {{ this.$store.state.info.korea_name }}님!
          </h2>
          <p>잔반 줄이기 운동 모두가 참여합시다!</p>
        </v-list-item-content>
        <v-list-item-avatar size="80">
          <v-img
            tile
            :src="this.image_base_url + this.$store.state.face_url"
          ></v-img
        ></v-list-item-avatar>
      </v-list-item>
      <!--간부전용-->
      <div v-if="this.$store.state.showcode == 'executive'">
        <div style="display: flex; margin-top: 2vh; margin-bottom: 3vh">
          <h3>현재 식수 인원 근황</h3>
          <v-spacer></v-spacer>
          <v-btn :href="'/user/Absentees_unit'">자세히</v-btn>
        </div>
        <v-card style="height: 13vh; text-align: center">
          <v-row>
            <v-col>
              <h4 style="margin-top: 1vh">식수인원</h4>
              <p style="font-size: 1.7em">{{ this.belong_count }}</p>
            </v-col>
            <v-col
              style="border-right-style: groove; border-left-style: groove"
            >
              <h4 style="margin-top: 1vh">식사 인원</h4>
              <p style="font-size: 1.7em; color: red">
                {{ this.belong_count - this.not_eat }}
              </p>
            </v-col>
            <v-col>
              <h4 style="margin-top: 1vh">식사완료</h4>
              <p style="font-size: 1.7em; color: green">{{ this.not_eat }}</p>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <!--공통 사항-->

      <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh">
        <h2>오늘(+2) 식단</h2>
        <v-spacer></v-spacer>
        <v-btn :href="'/user/view_mouth'">월별식단 보기</v-btn>
      </div>
      <v-col class="mian_item">
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
              <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[0].meal[0].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[0].meal[0].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
              <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[0].meal[1].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[0].meal[1].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
              <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[0].meal[2].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[0].meal[2].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item> </v-card
        ><!--eslint-disable-line-->
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
              <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[1].meal[0].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[1].meal[0].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
              <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[1].meal[1].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[1].meal[1].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
              <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[1].meal[2].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[1].meal[2].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
              <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[2].meal[0].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[2].meal[0].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
              <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[2].meal[1].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[2].meal[1].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
              <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food[2].meal[2].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food[2].meal[2].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <!--용사전용-->
      <div v-if="this.$store.state.showcode == 'Veterans'">
        <h2 style="margin-bottom: 2vh">식당 태그 인식하기</h2>
        <v-alert v-if="this.nfc_check == false" density="compact" type="error">
          <h2>NFC오류!</h2>
          <p style="font-size: 0.7rem">
            아이폰이나 일부 기기는 웹nfc 기능을 지원하지 않습니다. <br />지원
            안하는 경우 아래에 코드로 인증하기 버튼을 눌려 인증 하십시오. <br />
            만약안드로이드면 NFC를 켜보고 다시 시도해주십시오.
          </p>
          <p style="font-size: 0.7rem">
            ERROR: Device NFC not supported and not enabled
          </p>
          <v-btn @click="(code_type = !code_type), (overlay = !overlay)"
            >코드로 인증하기</v-btn
          >
        </v-alert>
        <v-card v-if="this.nfc_check == true">
          <v-card-title class="blue-grey white--text">
            <span class="text-h6">태그하기</span>
          </v-card-title>
          <v-list-item one-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1"></v-list-item-title>
              <v-list-item-subtitle
                >⚠ 오류가 있는 경우 간부에게 문의 하십시오</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              @click="
                [
                  (overlay = !overlay),
                  nfc_scan(),
                  (nfc_type = !nfc_type)((nfc_error = false)),
                  (nfc_success = false),
                ]
              "
              >태그 시작</v-btn
            >
          </v-card-actions>
        </v-card>
        <v-overlay :z-index="zIndex" :value="overlay">
          <!--nfc가 지원 할때-->
          <v-card
            v-if="nfc_type == true"
            class="black--text"
            :loading="loading"
            color="white"
          >
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate>
              </v-progress-linear>
            </template>
            <v-card-title class="text-h4" style="font-weight: bold"
              >태그 인식 대기중</v-card-title
            >
            <v-card-text class="black--text">
              <div class="text--primary">
                태그를 인식중입니다.<br />
                인식이 잘되기 위해 중앙으로 위치해 주십시오
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="#f5f5f5" @click="overlay = false">
                <div class="black--text">중지하기</div>
              </v-btn>
            </v-card-actions>
          </v-card>
          <!--nfc가 미지원 할때-->
          <v-card v-if="nfc_check == false">
            <v-alert
              v-if="Auth_error == true"
              type="error"
              style="
                width: 70vw;
                height: 10vh;
                transform: translate(1.3vh, 4vw);
              "
              elevation="1"
            >
              <h4>오류!</h4>
              <p style="font-size: 0.6rem">
                코드가 일치하지 않습니다. 코드를 생성한 간부한데 문의 하십시오
              </p>
            </v-alert>
            <v-card-title> NFC 대신 코드로 인증합니다. </v-card-title>
            <v-card-subtitle>
              아래 정보를 확인하고 저장해주세요
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>계급</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.Classes
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>이름</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.korea_name
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>식사</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.belong
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              <v-text-field
                v-model="Auth_body"
                label="코드 입력"
                required
              ></v-text-field>
              <v-card-action>
                <v-btn
                  @click="Auth_check(), code_update()"
                  style="margin-right: 4vw"
                  >저장</v-btn
                >
                <v-btn @click="(overlay = false), (Auth_error = false)"
                  >취소</v-btn
                >
              </v-card-action>
            </v-card-text>
          </v-card>
        </v-overlay>
        <v-snackbar
          v-model="nfc_error"
          :timeout="timeout"
          color="error"
          outlined
          right
          style="margin-right: 1.4vw"
        >
          <v-alert text prominent type="error" icon="mdi-cloud-alert">
            <div style="font-size: 0.8em">
              문제가 발생했습니다. <br />
              1. nfc 태그가 제대로 인식이 안됬습니다.<br />
              2. 다른 태그를 인식 했습니다<br />
              3. 서버에 문제가 발생 했을수 있습니다<br />
              4. https로 접속하지 않았습니다<br />
              <br />
              *간부에게 문의을 해서 해결하십시오
            </div>
          </v-alert>
        </v-snackbar>
        <v-snackbar
          v-model="nfc_success"
          :timeout="timeout"
          color="success"
          outlined
          right
          style="margin-right: 1.4vw"
        >
          <v-alert
            text
            prominent
            type="success"
            icon="mdi-checkbox-marked-circle-outline"
          >
            <div style="font-size: 0.8em">
              성공적으로 태그&저장를 했습니다!<br />
              성공 시각: {{ this.times }}
            </div>
          </v-alert>
        </v-snackbar>
      </div>
      <!--간부전용-->
      <div v-if="this.$store.state.showcode == 'executive'">
        <v-card style="width: 94vw">
          <v-card-title class="blue-grey white--text">
            <span class="text-h6">임시코드 생성</span>
          </v-card-title>
          <v-list-item one-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1"></v-list-item-title>
              <v-list-item-subtitle
                >WebNFC가 지원이 안되거나 NFC기기가 오류가 있는 경우 임시코드를
                생성해서 인증합니다</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              @click="
                [
                  (overlay = !overlay),
                  nfc_scan(),
                  (nfc_error = false),
                  (nfc_success = false),
                ]
              "
              :href="'/user/rm_code'"
              >페이지 이동</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 7vh"></div>
  </div>
</template>
<script>
// eslint-disable-next-line
import axios from "axios";
import "date-utils";
export default {
  data: () => {
    return {
      time: 0,
      data_t: [],
      food: [],
      //태그 관련 함수들

      //용사용
      zIndex: 0,
      overlay: false,
      loading: true,

      nfc_timer: 0, //팝업 타이머 설정
      nfc_type: false,
      code_type: false,

      //성공여부 판단
      nfc_error: false,
      nfc_success: false,
      timeout: 4000,

      //nfc 지원 여부
      nfc_check: true,

      //인증코드 관한 것들
      Auth_body: "",
      Auth_error: false,
      //간부용
      belong_count: "",
      not_eat: "",

      times: "",
      image_base_url: process.env.VUE_APP_ALL,

    };
  },
  async created() {
    //포(중대)인원 가져오기
    this.belong_count = await axios.get(
      process.env.VUE_APP_ALL +
        "/api/users" +
        "?filters[belong][$eq]=" +
        this.$store.state.info.belong,
      {
        headers: {
          Authorization: "Bearer " + this.$store.state.usertoken,
        },
      }
    );
    this.belong_count = this.belong_count.data.length;
    this.not_eat = await axios.get(
      process.env.VUE_APP_ALL +
        "/api/absenteesses" +
        "?filters[check_text][$eq]=" +
        "식사완료" +
        "&filters[belong][$eq]=" +
        this.$store.state.info.belong,
      {
        headers: {
          Authorization: "Bearer " + this.$store.state.usertoken,
        },
      }
    );
    this.not_eat = this.not_eat.data.data.length;
  },
  methods: {
    //nfc 같은 경우는 https 포트에서만 지원이 된다.
    async nfc_scan() {
      try {
        const ndef = new window.NDEFReader();
        await ndef.scan();

        ndef.addEventListener("reading", ({ message, serialNumber }) => {
          console.log(`> Serial Number: ${serialNumber}`);
          console.log(message);
          this.nfc_success = true;
          this.overlay = false;
          this.nfc_type = false;
          this.zIndex = 0;
          this.nfc_timer = 0;
          (this.time = new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")),
            start(
              serialNumber,
              this.$store.state.usertoken,
              this.$store.state.info
            );
          clearInterval(re);
        });

        let re = setInterval(async () => {
          //일정 시간이 되도 안될경우(기본 타이머 1분)
          if (this.nfc_timer == this.timeout) {
            console.log("timeout!");
            this.overlay = false;
            this.zIndex = 0;
            this.nfc_timer = 0;
            this.nfc_type = false;
            this.nfc_error = true;
            clearInterval(re);
          } else {
            //두조건이 불일치 할경우 그냥 카운터를 추가한다.
            this.nfc_timer += 1000;
          }
        }, 1000);
        // eslint-disable-next-line
        async function start(serialNumber, usertoken, datad) {
          console.log("startttttt");
          const serial_numd = await axios.get(
            process.env.VUE_APP_ALL +
              "/api/food-location-infos?filters[serial_number]=" +
              serialNumber,
            {
              headers: {
                Authorization: "Bearer " + usertoken,
              },
            }
          );
          console.log(serial_numd);
          await axios.post(
            process.env.VUE_APP_ALL + "/api/absenteesses",
            {
              data: {
                Classes: datad.Classes,
                name: datad.korea_name,
                eat_location:
                  serial_numd.data.data[0].attributes.belong + "식당",
                check_text: "식사완료",
                Time: new Date()
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, ""),
                belong: datad.belong,
              },
            },
            {
              headers: {
                Authorization: "Bearer " + usertoken,
              },
            }
          );
        }
      } catch (error) {
        this.overlay = false;
        //오류 경고 표시
        this.nfc_check = false;
      }
    },
    Auth_check() {},
    async code_update() {
      try {
        // eslint-disable-next-line
        const ttt = (this.result_status = await axios.get(
          process.env.VUE_APP_ALL +
            "/api/food-ramdoms?filters[code][$eq]=" +
            this.Auth_body,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.usertoken,
            },
          }
        ));
        if (ttt.data.data.length > 0) {
          this.times = new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "");
          this.overlay = false;
          this.nfc_success = true;
          try {
            await axios.post(
              process.env.VUE_APP_ALL + "/api/absenteesses",
              {
                data: {
                  Classes: this.$store.state.info.Classes,
                  name: this.$store.state.info.korea_name,
                  eat_location: this.$store.state.info.belong + "식당",
                  check_text: "식사완료",
                  Time: new Date()
                    .toISOString()
                    .replace(/T/, " ")
                    .replace(/\..+/, ""),
                  belong: this.$store.state.info.belong,
                },
              },
              {
                headers: {
                  Authorization: "Bearer " + this.$store.state.usertoken,
                },
              }
            );
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("?h");
          this.Auth_error = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    //3일치 식단 정보 가지고옴
    let foodmoth = await axios.get(process.env.VUE_APP_ALL + "/api/food-infos");
    foodmoth = foodmoth.data.data[0].attributes.food_info;

    let newDate = new Date();

    try {
      const nfcPermissionStatus = await navigator.permissions.query({
        name: "nfc",
      });
      if (nfcPermissionStatus.state === "Granted") {
        this.overlay = false;
        this.nfc_check = false;
      } else {
        const ndef = new window.NDEFReader();
        await ndef.scan();
      }
    } catch (error) {
      //오류 경고 표시
      console.log(error);
    }

    //날짜 데이터 추가

    this.data_t.push(
      new Date(newDate.setDate(newDate.getDate())).toFormat("YYYY-MM-DD")
    );
    this.data_t.push(
      new Date(newDate.setDate(newDate.getDate() + 1)).toFormat("YYYY-MM-DD")
    );
    this.data_t.push(
      new Date(newDate.setDate(newDate.getDate() + 1)).toFormat("YYYY-MM-DD")
    );
    console.log(this.data_t);
    //식단데이터 추가
    for (let index = 0; index < foodmoth.length; index++) {
      if (foodmoth[index].dates.indexOf(this.data_t[0]) == 0) {
        this.food.push(foodmoth[index]);
      }
      if (foodmoth[index].dates.indexOf(this.data_t[1]) == 0) {
        this.food.push(foodmoth[index]);
      }
      if (foodmoth[index].dates.indexOf(this.data_t[2]) == 0) {
        this.food.push(foodmoth[index]);
      }
    }
    console.log(this.food);
  },
};
</script>
