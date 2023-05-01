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
          <v-card-title>임의코드 생성</v-card-title>
          <v-card-subtitle
            >아이폰이나 NFC미지원 기기를 위해 임시코드를
            생성합니다.</v-card-subtitle
          >
        </v-img>
        <v-card-subtitle>
          ⚠️ 주의사항 안내<br />
          <div style="font-size: 0.6rem;">
            코드는 아래에 버튼을 누루면 바로 임의코드가 생성되어서
            활성됨니다.<br />
            임의코드 유효 기간은 1분이며 시간이 만료가 되면 다시 활성화
            해야됩니다.<br />
          </div>
        </v-card-subtitle>
        <v-card-title>임의코드</v-card-title>
        <!--코드가 어떻게 보일지 생각할것-->
        <v-card>

        </v-card>
        <v-btn>생성하기</v-btn>
      </v-card>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 4vh"></div>
  </div>
</template>
<script>
export default {};
</script>
