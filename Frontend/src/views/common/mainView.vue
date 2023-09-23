<template>
  <div style="display: table">
    <v-col style="margin-top: 3vh">
      <v-list-item>
        <v-list-item-content>
          <h2>환영합니다 {{ this.$store.state.info.korea_name }}님!</h2>
          <p>오늘도 활기찬 하루 보내세요!</p>
        </v-list-item-content>
        <v-list-item-avatar size="80">
          <v-img
            tile
            :src="this.image_base_url + this.$store.state.face_url"
          ></v-img
        ></v-list-item-avatar>
      </v-list-item>
    </v-col>
    <v-col class="main_frame">
      <!--간부 전용부분-->
      <div v-if="this.$store.state.showcode == 'navebar'">
        <h2>우리 포대 유동병력 사항</h2>
        <v-card style="margin-top: 1vh; margin-bottom: 2vh">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">2포대</v-list-item-title>
              <v-list-item-subtitle
                >default: 생활관 구분(X)</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <!--현재 인원 숫자로 표시-->
          <v-row no-gutters>
            <v-col>
              <v-card class="main_man pa-2" outlined tile>
                <!--색이나 크기는 나중에 정하-->
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>test</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>test</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-card>
            </v-col>
            <v-col>
              <!--고정형 이기 때문에 추가 하지 않은 이상 수정하지 -->
              <v-card class="pa-2" outlined tile>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>test</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>test</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>test</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <h2>오늘 부대 식단표</h2>
      <!--식단표 for false-->
      <v-col class="mian_item">
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t }}</div>
              <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food.meal[0].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food.meal[0].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t }}</div>
              <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food.meal[1].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food.meal[1].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card elevation="2" style="margin-right: 10px">
          <v-list-item>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ this.data_t }}</div>
              <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
              <v-list-item-subtitle
                v-for="item in this.food.meal[2].menu"
                v-bind:key="item"
              >
                {{ item }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Kcal: {{ this.food.meal[2].cal }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <!--승인 현황-->
      <div style="display: flex">
        <h2 style="margin-bottom: 1vh">승인 현황</h2>
        <v-spacer></v-spacer>
        <v-btn href="/user/app_status">더보기</v-btn>
      </div>
      <v-card style="overflow: auto; height: 25vh" class="mx-auto" tile>
        <v-list>
          <v-list-item v-for="item in this.force_status" :key="item">
            <v-list-item-content>
              <v-list-item-title
                >{{ item.attributes.Classes + item.attributes.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >이동할 장소: {{ item.attributes.local }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >신청시간: {{ item.attributes.createdAt }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-icon> {{ item.attributes.Approval }}</v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 8vh"></div>
  </div>
</template>
<script>
// eslint-disable-next-line
import axios from "axios";
import "date-utils";
export default {
  data: () => {
    return {
      image_base_url: process.env.VUE_APP_ALL,

      data_t: 0,
      food: {},
      force_status: "",
    };
  },
  async created() {
    this.force_status = await axios.get(
      process.env.VUE_APP_ALL + "/api/mobile-forces",
      {
        headers: {
          Authorization: "Bearer " + this.$store.state.usertoken,
        },
      }
    );
    this.force_status = this.force_status.data.data;
  },
  methods: {},
  async mounted() {
    //3일치 식단 정보 가지고옴
    let foodmoth = await axios.get(process.env.VUE_APP_ALL + "/api/food-infos");
    foodmoth = foodmoth.data.data[0].attributes.food_info;

    let newDate = new Date();
    this.data_t = newDate.toFormat("YYYY-MM-DD");
    for (let index = 0; index < foodmoth.length; index++) {
      if (foodmoth[index].dates.indexOf(newDate.toFormat("YYYY-MM-DD")) == 0) {
        this.food = foodmoth[index];
      }
    }
  },
};
</script>
