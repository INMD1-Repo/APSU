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
        <div style="display: flex; margin-bottom: 1vh">
          <h2>유동병력 신청 현황</h2>
          <v-spacer></v-spacer>
          <v-btn href="/user/app_status">더보기</v-btn>
        </div>
        <v-card style="height: 20vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in 10" :key="item">
              <v-list-item-content>
                <v-list-item-title>병사 XXX</v-list-item-title>
                <v-list-item-subtitle
                  >분과: XXX 특기 : XXX</v-list-item-subtitle
                >
                <v-list-item-subtitle>이동할 장소: XXX</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>대기</v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
      <!--용사용-->
      <div v-if="this.$store.state.showcode == 'Veterans'">
        <div style="display: flex; margin-bottom: 1vh">
          <h2>유동병력 신청 현황</h2>
          <v-spacer></v-spacer>
          <v-btn href="/user/app_status">더보기</v-btn>
        </div>
        <v-card style="height: 40vh; width: 94vw; overflow: auto">
          <v-list>
            <v-list-item v-for="item in this.force_status" :key="item">
              <v-list-item-content>
                <v-list-item-title
                  >{{ item.attributes.Classes + item.attributes.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >이동할 장소:
                  {{ item.attributes.local }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >신청시간:
                  {{ item.attributes.createdAt }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-icon>
                {{ item.attributes.Approval }}</v-list-item-icon
              >
            </v-list-item>
          </v-list>
        </v-card>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              style="margin-top: 1vh; width: 94vw"
              >장소 이동 신청하기</v-btn
            >
          </template>
          <v-card>
            <!--title-->
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>보고서 제출</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <!--body-->
            <v-alert style="margin: 2vh" type="error" v-show="notifications">{{
              this.Error_text
            }}</v-alert>
            <!--찐 body-->
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1">
                장소이동 신청 안내
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-card class="mb-5" height="200px" outlined></v-card>
                <span style="font-size: 0.6rem"
                  >*본 사항을 충실히 읽고 책임을 본인에게 있음을 확인
                  했습니다.</span
                >
                <v-btn color="primary" @click="e6 = 2"> 다음 </v-btn>
                <v-btn @click="dialog = false" text> 취소 </v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2">
                신청자 확인
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-card class="mb-12" height="200px" outlined>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>계급</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.class
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
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>소속</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.belong
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
                <v-btn color="primary" @click="e6 = 3"> 다음 </v-btn>
                <v-btn @click="e6 = 1" text> 뒤로 </v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3">
                이동 장소 선택
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card outlined style="border: 1rem">
                  <h5>장소를 입력해주세요.</h5>
                  <v-text-field
                    label="장소*"
                    hint="EX: PX,취사장"
                    v-model="local_text"
                  ></v-text-field>
                  <v-text-field
                    label="특이사항(동행자)"
                    hint="동행자 또는 기타 사항이 있으면 적으시기 바함니다."
                    v-model="significant_text"
                  ></v-text-field>
                </v-card>
                <v-btn color="primary" @click="e6 = 4"> 다음 </v-btn>
                <v-btn @click="e6 = 2" text> 뒤로 </v-btn>
              </v-stepper-content>

              <v-stepper-step step="4"> 제출 </v-stepper-step>
              <v-stepper-content step="4">
                <v-card outlined>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>계급</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.class
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
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>소속</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.$store.state.info.belong
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>이동 장소</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.local_text
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>특이사항(동행자)</v-list-item-title>
                      <v-list-item-subtitle>{{
                        this.significant_text
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
                <v-checkbox
                  style="margin-left: 0.5rem"
                  v-model="checkbox"
                  @click="checkbox = true"
                  :label="`문제가 없음을 확인하고 제출합니다.`"
                ></v-checkbox>
                <v-btn color="primary" @click="check()"> 저장 </v-btn>
                <v-btn @click="e6 = 3" text> 뒤로 </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-card>
        </v-dialog>
        <v-snackbar
          v-model="success_notifications"
          :timeout="timeout"
          color="success"
          outlined
          right
          style="
            margin-right: 1.4vw;
            margin-bottom: 2rem;
            padding-bottom: -3rem;
          "
        >
          <v-alert
            text
            prominent
            type="success"
            icon="mdi-checkbox-marked-circle-outline"
          >
            <div style="font-size: 0.8em">
              성공적으로 서버에 저장을 했습니다.<br />
            </div>
          </v-alert>
        </v-snackbar>
        <v-snackbar
          v-model="fail_notifications"
          :timeout="timeout"
          color="error"
          outlined
          right
          style="
            margin-right: 1.4vw;
            margin-bottom: 2rem;
            padding-bottom: -3rem;
          "
        >
          <v-alert
            text
            prominent
            type="error"
            icon="mdi-checkbox-marked-circle-outline"
          >
            <div style="font-size: 0.8em">
              서버에 올리는 중 문제가 발생했습니다.<br />
              간부한데 문의해주십시오.
            </div>
          </v-alert>
        </v-snackbar>
      </div>
      <!--'간부용에만 표시됨'-->
      <div v-if="this.$store.state.showcode == 'executive'">
        <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh">
          <h2>유동병력 승인/거절</h2>
          <v-spacer></v-spacer>
          <v-btn href="/user/app_record">더보기</v-btn>
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

              <v-list-item-icon>거절</v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 4vh"></div>
  </div>
</template>
<script>
// eslint-disable-next-line
import router from "@/router";
import axios from "axios";
export default {
  data: () => {
    return {
      temp: 0,
      e6: 1,
      dialog: false,
      notifications: false,
      widgets: false,
      error_body: "",
      checkbox: false,
      timeout: 3000,
      success_notifications: false,
      fail_notifications: false,
      Error_text: "",
      //데이터 보내기 위한 함수
      local_text: "",
      significant_text: "",
      //여러 기록물
      force_status: [],
      appted_status: [],
    };
  },
  async created() {
    this.force_status = await axios.get(
      "http://localhost:1337/api/mobile-forces?filters[name][$eq]=" +
        this.$store.state.info.korea_name,
      {
        headers: {
          Authorization: "Bearer " + this.$store.state.usertoken,
        },
      }
    );
    this.force_status = this.force_status.data.data;
  },
  methods: {
    async check() {
      if (this.checkbox == false) {
        this.Error_text = "체크를 해주십시오";
        this.notifications = true;
      } else {
        try {
          await axios.post(
            "http://localhost:1337/api/mobile-forces",
            {
              data: {
                Classes: this.$store.state.info.class,
                name: this.$store.state.info.korea_name,
                local: this.local_text,
                significant_text: this.significant_text,
                Approval: "pending",
              },
            },
            {
              headers: {
                Authorization: "Bearer " + this.$store.state.usertoken,
              },
            }
          );
          this.success_notifications = true;
          this.dialog = false;
          await axios.post(
            "http://localhost:1337/api/app-logers",
            {
              data: {
                body:
                  "유동병력신청 완료" +
                  {
                    Classes: this.$store.state.info.class,
                    name: this.$store.state.info.korea_name,
                    local: this.local_text,
                    significant_text: this.significant_text,
                    Approval: "대기",
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
          router.go();
        } catch (error) {
          this.fail_notifications = true;
          this.dialog = false;
          await axios.post(
            "http://localhost:1337/api/app-logers",
            {
              data: {
                body: "유동병력신청 실패함",
                error_massage:
                  error +
                  {
                    Classes: this.$store.state.info.class,
                    name: this.$store.state.info.korea_name,
                    local: this.local_text,
                    significant_text: this.significant_text,
                    Approval: "pending",
                  },
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      }
    },
  },
};
</script>
