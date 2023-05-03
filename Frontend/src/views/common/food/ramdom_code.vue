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
        </v-img>

        <v-card-title>임의코드</v-card-title>
        <!--코드가 어떻게 보일지 생각할것-->
        <v-card style="margin: 5%">
          <div style="display: table; margin-left: auto; margin-right: auto">
            <v-icon x-large style="padding-top: 2vh; padding-bottom: 2vh"
              >fa-fingerprint</v-icon
            >
          </div>
          <div style="text-align: center; padding-bottom: 5vh;" >
            <h4>임시 인증코드 생성</h4>
            <p style="font-size: 0.7rem;">아래에 버튼을 누루면 자동으로 코드를 만들어서 보여줌니다.</p>
          </div>
        </v-card>
        <v-card-subtitle>
          ⚠️ 주의사항 안내<br />
          <div style="font-size: 0.6rem">
            코드는 아래에 버튼을 누루면 바로 임의코드가 생성되어서
            활성됨니다.<br />
            임의코드 유효 기간은 1분이며 시간이 만료가 되면 다시 활성화
            해야됩니다.<br />
          </div>
        </v-card-subtitle>
        <v-btn color="primary" dark v-on="on" style="margin: 2%; width: 90vw"
          >코드 생성하기
        </v-btn>
      </v-card>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 4vh"></div>
  </div>
</template>
<script>
export default {};
</script>
