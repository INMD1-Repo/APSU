<template>
  <div style="display: table">
    <v-col></v-col>
    <v-col class="force_frame">
      <h1>결식자 관리</h1>
      <p style="font-size: 0.9rem">
        자신의 포대(중대)의 식사 현황을 보여줌니다.
      </p>
      <h2>현재 결식자 현황</h2>
      <v-data-table
    :headers="headers"
    :items="Absentees_api"
    class="elevation-1"
  >
    <!-- eslint-disable-next-line-->
    <template v-slot:item.check_text="{ item }">
      <v-chip
        :color="getColor(item.attributes.check_text)"
        dark
      >
        {{ item.attributes.check_text }}
      </v-chip>
    </template>
  </v-data-table>
    </v-col>
  </div>
</template>
<script>
// eslint-disable-next-line

import axios from "axios"; 
  export default {
    data () {
      return {
        headers: [
          {
            text: '용샤',
            align: 'start',
            sortable: false,
            value: 'attributes.name' ,
          },
          { text: '식사여부', value: 'attributes.check_text' },
          { text: '출석 시각', value: 'attributes.Time' },
          { text: '장소', value: 'attributes.Absentees_local' },
        ],
        Absentees_api: [],
      }
    },
    async created() {
        this.Absentees_api = await axios.get(process.env.VUE_APP_ALL + "/api/absenteesses?filters[belong][$eq]=" + this.$store.state.info.belong ,{
            headers: {
                "Authorization" : "Bearer " + this.$store.state.usertoken

            }
        })
        this.Absentees_api = this.Absentees_api.data.data

        console.log(this.Absentees_api);
    },
    methods: {
      getColor (check_text) {
        if (check_text == "식사안함") return 'red'
        else return 'green'
      },
    },
  }
</script>
