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
                :rules="rules"
                style="width: 75vw; margin-top: 2vh;"
              ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
          <!--데이터 테이블-->
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">ID:ass1jks</div>
                <v-list-item-title class="text-h5 mb-1">
                  상병 아무개
                </v-list-item-title>
                <v-list-item-subtitle>이동장소: 어딘가</v-list-item-subtitle>
                <v-list-item-subtitle
                  >신청시각: 0000-00-00 00:00:00</v-list-item-subtitle
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
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">ID:ass1jks</div>
                <v-list-item-title class="text-h5 mb-1">
                  상병 아무개
                </v-list-item-title>
                <v-list-item-subtitle>이동장소: 어딘가</v-list-item-subtitle>
                <v-list-item-subtitle
                  >신청시각: 0000-00-00 00:00:00</v-list-item-subtitle
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
        items: ["찬성", "반대", "보류"],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
          },
        ],
      };
    },
  };
  </script>
  