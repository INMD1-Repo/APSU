<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <h1>유동병력 신청 진행</h1>
      <p style="font-size: 1rem; padding-top: 1rem">
        여기선 대대 전체 신청 진행 사항을 볼수있습니다.<br />
        다른 포대(중대) 용사들이 해당 포대 간부님게 문의 바람니다.
      </p>
      <v-data-table
        :headers="headers"
        :items="getinfo"
        item-key="name"
        :search="search"
        :custom-filter="filterOnlyCapsText">
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search (UPPER CASE ONLY)"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-col>
  </div>
</template>

<script>
// eslint-disable-next-line
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      calories: "",
      getinfo: [],
    };
  },
  async created() {
    this.getinfo = await axios.get("http://localhost:1337/api/mobile-forces", {
      headers : {
        "Authorization": "Bearer " + this.$store.state.usertoken,
      }
    })
    this.getinfo = this.getinfo.data.data
  },
  computed: {
    headers() {
      return [
        {
          text: "계급",
          align: "start",
          sortable: false,
          value: "attributes.Classes",
        },
        {
          text: "이름",
          value: "attributes.name",
        },
        { text: "장소", value: "attributes.local" },
        { text: "시간", value: "attributes.createdAt" },
        { text: "승인여부", value: "attributes.verdict" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>
