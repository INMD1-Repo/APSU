<template>
    <div style="display: table">
        <v-col></v-col>
        <v-col class="force_frame">
            <v-list-item>
                <v-list-item-content>
                    <h2>즐거운 식사 하세요 ! XXX님!</h2>
                    <p>잔발줄이기 운동 모두가 참여합시다!</p>
                </v-list-item-content>
            </v-list-item>
            <div style="display: flex; margin-top: 2vh; margin-bottom: 2vh;">
                <h2>오늘(+2) 식단</h2>
                <v-spacer></v-spacer>
                <v-btn>월별식단 보기</v-btn>
            </div>
            <v-col class="mian_item">
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[0]}}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[0].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[0]}}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[1].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[0]}}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[0].meal[2].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[0].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[1]}}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[0].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[1]}}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[1].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[1]}}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[1].meal[2].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[1].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[2]}}</div>
                            <v-list-item-title class="text-h5 mb-1">아침</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[0].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[0].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[2]}}</div>
                            <v-list-item-title class="text-h5 mb-1">점심</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[1].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[1].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">{{this.data_t[2]}}</div>
                            <v-list-item-title class="text-h5 mb-1">저녁</v-list-item-title>
                            <v-list-item-subtitle v-for=" item in this.food[2].meal[2].menu" v-bind:key="item"> {{ item }}</v-list-item-subtitle>
                            <v-list-item-subtitle>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</v-list-item-subtitle>
                            <v-list-item-subtitle>Kcal: {{ this.food[2].meal[2].cal }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <!--용사전용-->
            <h2>식당 태그 인식하기</h2>
            <v-card>
                
            </v-card>
            <!--간부전용-->            
        </v-col>
    </div>
</template>
<script>
import data from '../../assets/example.json'
import 'date-utils'
export default {
    data: () => {
        return {
            data_t : [],
            food :[]
        }
    },
    mounted() {
        let newDate = new Date();
        //날짜 데이터 추가
        this.data_t.push(new Date(newDate.setDate(newDate.getDate())).toFormat('YYYY-MM-DD'));
        this.data_t.push(new Date(newDate.setDate(newDate.getDate() + 1)).toFormat('YYYY-MM-DD'));
        this.data_t.push(new Date(newDate.setDate(newDate.getDate() + 1)).toFormat('YYYY-MM-DD'));

        //식단데이터 추가
        for (let index = 0; index < data.length; index++) {
            if(data[index].dates.indexOf(this.data_t[0]) == 0){
             this.food.push(data[index])
            }     
            if(data[index].dates.indexOf(this.data_t[1]) == 0){
             this.food.push(data[index])
            }  
            if(data[index].dates.indexOf(this.data_t[2]) == 0){
             this.food.push(data[index])
            } 
        }
    }
}

</script>
