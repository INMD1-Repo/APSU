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
          v-for="item in temp"
          v-bind:key="item"
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">ID:ass1jks</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.Classes + item.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >이동장소: {{ item.local }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >신청시각: {{ item.time }}</v-list-item-subtitle
              >
              <v-list-item-subtitle>승인여부: 대기중</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!--이 밑에 div 묶어 있는건 간부만 볼수 있습-->
          <div style="display: flex">
            <v-card-actions>
              <v-btn outlined rounded text> 저장 </v-btn>
              <v-select
                v-model="variant"
                :items="items"
                clearable
                label="결과"
                style="margin-left: 30vw; width: 25vw"
              ></v-select>
            </v-card-actions>
          </div>
        </v-card>
        <div style="height: 5vh"></div>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search_temp: "",
      items: ["찬성", "반대", "보류"],
      //임시로 데이터이다.
      sample: [
        {
          Classes: "일병",
          name: "아무개",
          local: "어딘가가",
          time: "0000-00-00 00:00:00",
          verdict: "거절",
        },
        {
          Classes: "일병",
          name: "왜무개",
          calories: 237,
          time: "0000-00-00 00:00:00",
          verdict: "거절",
        },
        {
          Classes: "일병",
          name: "삼성갤력",
          calories: 159,
          time: "0000-00-00 00:00:00",
          verdict: "거절",
        },
        {
          Classes: "일병",
          name: "삼그맘삼금",
          calories: 305,
          time: "0000-00-00 00:00:00",
          verdict: "승인",
        },
      ],
      //검색결과 데이터 임시저
      temp: [],
    };
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
  },
  mounted() {
    this.temp = this.sample;
  },
};
</script>
