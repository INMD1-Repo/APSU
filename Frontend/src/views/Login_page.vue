<template>
  <v-app>
    <v-main app>
      <!--메인페이지-->
      <v-container class="height-100 center">
        <!--로그인 카드-->
        <div style="display: table">
          <div class="index_text">
            <h1 style="font-size: 6vh">welcome!</h1>
            <span style="font-size: 2vh">
              부대간편업무 앱에 오신걸 환영합니다.
              <br />저희 앱은 인원추적관리, 결식자 식별같은 병영생활에 도움되는
              기능을 제공합니다.
            </span>
          </div>
          <v-alert style="font-size: 1.4vh" dense type="info"
            >비밀번호나 아이디를 까먹은경우 간부에게 문의를 주십시오.</v-alert
          >
          <v-card>
            <v-list-item>
              <v-form class="md-3">
                <!--로그인이 안되면 표시를 한다,-->
                <div v-if="this.error == 1">
                  <v-alert dense outlined type="error">
                    <strong>아이디</strong> 또는
                    <strong>비밀번호가</strong> 잘못 입력 되었습니다.
                  </v-alert>
                </div>
                <v-text-field
                  v-model="id"
                  label="아이디"
                  hide-details="auto"
                  outlined
                  clearable
                ></v-text-field>
                <br />
                <!--속임수 -->
                <v-text-field
                  v-model="pw"
                  label="비밀번호"
                  outlined
                  clearable
                ></v-text-field>
                <v-checkbox label="자동 로그인"></v-checkbox>
              </v-form>
            </v-list-item>
            <div class="text-center">
              <v-btn
                class="botten login-text"
                @click="login"
                rounded
                dark
                color="#6750A4"
                >로그인</v-btn
              >
            </div>
          </v-card>
          <!--회원가입 dialog-->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                style="margin-top: 1vh"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >회원가입</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">회원가입</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['이등병', '일병', '상병', '병장']"
                        label="계급*"
                        required
                        v-model="Class"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="이름*"
                        v-model="si_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="['본부', '1포대', '2포대', '3포대']"
                        label="소속*"
                        required
                        v-model="belong"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="특기*"
                        hint="예) 전포, 통신, 취사"
                        v-model="specialty"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="생년월일*"
                        hint="2022-04-03 이렇게 기입해주십시오"
                        v-model="birthday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="이메일*"
                        :rules="[rules.email]"
                        v-model="si_email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="아이디*"
                        required
                        v-model="sing_id"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="비밀번호*"
                        type="password"
                        :rules="[rules.passss]"
                        hint="영문,숫자,특수기호중 2개 선택해서 최소 8자 이상"
                        required
                        v-model="sing_pw"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*이 표시는 필수 입력 사항입니다.</small><br />
                <small
                  >*진급을 하신경우 시스템에서는 반영이 안되기 때문에 수동으로
                  수정해줘야 합니다.</small
                >
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                  >취소</v-btn
                >
                <!--먼저 확인을 하고 저장을 한다 아닐씨 오류메세지를 표출한다.-->
                <v-btn color="blue darken-1" @click="sing_up">저장하기</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data: () => {
    return {
      error: 0,
      dialog: false,
      id: "",
      pw: "",
      nowip: "",
      //기본적엔 셋팅
      Class: "",
      si_name: "",
      belong: "",
      specialty: "",
      birthday: "",
      sing_id: "",
      sing_pw: "",
      si_email: "",
      
      sing_pw_double: 0,
      rules: {
        passss: (value) => {
          const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
          return pattern.test(value) || "조건부에 해당되지 않습니다.";
        },
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  async created() {
    //사용자 기본 ip수집
    this.nowip = await axios.get("https://api.db-ip.com/v2/free/self");
    this.$store.state.nowip = this.nowip
  },
  methods: {
    async login() {
      try {
        //로그인 요청
        try {
          //유저확인
          const user_info = await axios.post(
            "http://localhost:1337/api/auth/local",
            {
              identifier: this.id,
              password: this.pw,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(user_info);
          this.$store.commit("info", user_info.data.user)
          this.$store.commit("usertoken", user_info.data.jwt)
          this.$store.commit("showcode", user_info.data.user.showcode)
          
          //기본 환경 설정
          this.$store.commit("login_set", 1);
          window.localStorage.setItem("login", "1");

          //앱로그
          await axios.post(
            "http://localhost:1337/api/app-logers",
            {
              data: {
                body: "로그인에 성공함",
                ip: this.nowip.data.ipAddress,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.$router.push({ path: "/user/main" });
        } catch (error) {
          await axios.post(
            "http://localhost:1337/api/app-logers",
            {
              data: {
                body: "로그인에 실패함",
                error_massage: error,
                ip: this.nowip.data.ipAddress,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    async sing_up() {
      //서버에 보낼 기본적인 데이터 정렬
      var sing_up_data = {
        class: this.Class,
        username: this.sing_id,
        belong: this.belong,
        specialty: this.specialty,
        birthday: this.birthday,
        korea_name: this.si_name,
        password: this.sing_pw,
        email: this.si_email,
        showcode: "Veterans"
      };
      try {
        //비밀번호 중복검사
        try {
          //회원가입 데이터 서버로 전송
          await axios.post(
            "http://localhost:1337/api/auth/local/register",
            sing_up_data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          await axios.post(
            "http://localhost:1337/api/app-logers",
            {
              data: {
                body: "회원가입에 성공함",
                ip: this.nowip.data.ipAddress,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.dialog = false;
        } catch (error) {
          //여긴 이메일이나 비밀번호가 중복이 되면 나타난다.
          console.log(error);
        }
      } catch (error) {
        await axios.post(
          "http://localhost:1337/api/app-logers",
          {
            data: {
              body: "회원가입에 실패함",
              error_massage: error,
              ip: this.nowip.data.ipAddress,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      console.log(sing_up_data);
    },
  },
};
</script>
