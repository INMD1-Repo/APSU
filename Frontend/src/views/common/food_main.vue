<template>
    <div style="display: table">
        <v-col></v-col>
<<<<<<< HEAD
        <v-col class="food_frame">
=======
        <v-col class="food_force">
>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
            <v-list-item>
                <v-list-item-content>
                    <h2>즐거운 식사 하세요 ! XXX님!</h2>
                    <p>잔반 줄이기 운동 모두가 참여합시다!</p>
                </v-list-item-content>
            </v-list-item>
            <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh;">
                <h2>오늘(+2) 식단</h2>
                <v-spacer></v-spacer>
<<<<<<< HEAD
                <v-btn :href="'/user/view_mouth'">월별식단 보기</v-btn>
=======
                <v-btn :href="'/user/food_moth'">월별식단 보기</v-btn>
>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
            </div>
            <v-col class="mian_item">
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[0].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[1].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[0] }}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[2].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
<<<<<<< HEAD
                </v-card><!--eslint-disable-line-->
=======
                </v-card>
>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[0].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[1].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[1] }}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[2].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[0].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[1].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{ this.data_t[2] }}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[2].menu" v-bind:key="item"> {{
                                item
                            }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <!--용사전용-->
<<<<<<< HEAD
            <h2 style="margin-bottom: 2vh;">식당 태그 인식하기</h2>
            <v-card>
                <v-card-title class="blue-grey white--text">
                    <span class="text-h6">태그하기</span>
                </v-card-title>
                    <v-list-item one-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1"></v-list-item-title>
                            <v-list-item-subtitle>⚠ 오류가 있는 경우 간부에게 문의 하십시오</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                <v-card-actions>
                    <v-btn outlined rounded text  @click="[overlay = !overlay, nfc_scan(), nfc_error = false, nfc_success = false ]">태그 시작</v-btn>
                </v-card-actions>
            </v-card>
            <v-overlay :z-index="zIndex" :value="overlay">
                <v-card class="black--text" :loading="loading" color="white">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate >     
                        </v-progress-linear>
                    </template>
                    <v-card-title class="text-h4" style="font-weight: bold;">태그 인식 대기중</v-card-title>
                    <v-card-text class="black--text ">
                        <div class="text--primary">
                            태그를 인식중입니다.<br>
                            인식이 잘되기 위해 중앙으로 위치해 주십시오
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="#f5f5f5"  @click="overlay = false">
                            <div class="black--text ">중지하기</div>
=======
            <h2 style="margin-bottom: 1vh;">식당 태그 인식하기</h2>
            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1">
                            Headline 5
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                    <v-btn outlined rounded text @click="[overlay = !overlay, loading = !loading]">
                        Button
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-overlay :z-index="zIndex" :value="overlay">

                <v-card class="mx-auto" max-width="344" outlined :loading="loading" >
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">
                                Headline 5
                            </v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <v-btn class="white--text" color="teal" @click="overlay = false">
                            Hide Overlay
>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-overlay>
<<<<<<< HEAD
                <v-snackbar v-model="nfr_error" :timeout="timeout" color="error" outlined right style="margin-right: 1.4vw;" >
                    <v-alert text prominent type="error" icon="mdi-cloud-alert" >
                        <div style="font-size: 0.8em;">
                            문제가 발생했습니다. <br>
                            1. nfc 태그가 제대로 인식이 안됬습니다.<br>
                            2. 다른 태그를 인식 했습니다<br>
                            3. 서버에 문제가 발생 했을수 있습니다<br>
                            <br>
                            *간부에게 문의을 해서 해결하십시오
                        </div>
                    </v-alert>
                </v-snackbar>
                 <!--<v-snackbar v-model="nfc_error" :timeout="timeout" color="error" outlined right style="margin-right: 1.4vw;" >
                    <v-alert text prominent type="error" icon="mdi-cloud-alert" >
                        <div style="font-size: 0.8em;">
                            문제가 발생했습니다. <br>
                            1. nfc 태그가 제대로 인식이 안됬습니다.<br>
                            2. 다른 태그를 인식 했습니다<br>
                            3. 서버에 문제가 발생 했을수 있습니다<br>
                            <br>
                            *간부에게 문의을 해서 해결하십시오
                        </div>
                    </v-alert>
                 </v-snackbar>-->
            <!--간부전용-->            
=======
            <!--간부전용-->
>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
        </v-col>
    </div>
</template>
<script>
import data from '../../assets/example.json'
import 'date-utils'
export default {
    data: () => {
        return {
<<<<<<< HEAD
            data_t : [],
            food :[],
            //태그 관련 함수들
            zIndex: 0,
            overlay: false,
            loading: true,
            nfc_timer: 0, 
            nfc_type: false, //성공여부 판단
            nfc_error: false,
            nfc_success: false,
            timeout: 2000,
        }
    },
    methods: {
        nfc_scan() {
            //일정 주기로 계속 테스트를 함
            let re = setInterval(() => {
                //일정 시간이 되도 안될경우(기본 타이머 1분)
                if(this.nfc_timer == 2000){
                    console.log("timeout!")
                    this.overlay = false;
                    this.zIndex = 0; 
                    this.nfr_error = true;
                    clearInterval(re)
                }else if(this.nfc_type == true){
                    //만약에 성공을 한다면
                    console.log("sucess");
                }else{
                    //두조건이 불일치 할경우 그냥 카운터를 추가한다.
                    this.nfc_timer += 1000;
                    console.log("on");
                }
            }, 1000);
            
=======
            data_t: [],
            food: [],
            overlay: false,
            zIndex: 0,
            loading: false

>>>>>>> 9ec4d1d42858b2aa8674a41f70d8758691b4b9dd
        }
    },
    methods: {

    },
    mounted() {
        let newDate = new Date();
        //날짜 데이터 추가
        this.data_t.push(new Date(newDate.setDate(newDate.getDate())).toFormat('YYYY-MM-DD'));
        this.data_t.push(new Date(newDate.setDate(newDate.getDate() + 1)).toFormat('YYYY-MM-DD'));
        this.data_t.push(new Date(newDate.setDate(newDate.getDate() + 1)).toFormat('YYYY-MM-DD'));

        //식단데이터 추가
        for (let index = 0; index < data.length; index++) {
            if (data[index].dates.indexOf(this.data_t[0]) == 0) {
                this.food.push(data[index])
            }
            if (data[index].dates.indexOf(this.data_t[1]) == 0) {
                this.food.push(data[index])
            }
            if (data[index].dates.indexOf(this.data_t[2]) == 0) {
                this.food.push(data[index])
            }
        }
    }
}

</script>
