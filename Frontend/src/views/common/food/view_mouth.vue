<template>
    <div style="display: table">
        <!--이건 더미다-->
        <v-col></v-col>
        <v-col class="force_frame">
            <h2>이번달 식단</h2>
            <div style="margin-top: 2vh;">
                <v-sheet height="65vh">
                    <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @change="updateRange"
                    ></v-calendar>
                    <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                    >
                        <v-card color="grey lighten-4" min-width="350px" flat>
                            <v-toolbar :color="selectedEvent.color" dark>
                                <v-select
                                    :items="items"
                                    v-model="select_data"   
                                    item-text="title"
                                    item-value="value"                  
                                    label="시간?"
                                    style="margin-top: 3vh; margin-right: 8vw;"
                                ></v-select>
                            </v-toolbar>
                            <div v-if="this.select_data == 'breakfast'"> 
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5 mb-1">
                                    아침식사
                                    </v-list-item-title>
                                    <v-list-item-subtitle v-for=" item in this.selectedEvent.data[0].menu" v-bind:key="item">
                                     {{item}}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>칼로리: {{this.selectedEvent.data[0].cal}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            </div>
                            <div v-if="this.select_data == 'Lunch'"> 
                            <v-list-item  two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5 mb-1" style="margin-bottom: 2vh;">
                                    점심식사
                                    </v-list-item-title>
                                    <v-list-item-subtitle v-for=" item in this.selectedEvent.data[1].menu" v-bind:key="item">
                                     {{item}}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>칼로리: {{this.selectedEvent.data[1].cal}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            </div>
                             <div v-if="this.select_data == 'Dinner'"> 
                            <v-list-item  two-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5 mb-1">
                                    저녁식사
                                    </v-list-item-title>
                                    <v-list-item-subtitle v-for=" item in this.selectedEvent.data[2].menu" v-bind:key="item">
                                     {{item}}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>칼로리: {{this.selectedEvent.data[2].cal}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            </div>
                            <v-card-text>
                                <div>*총 하루 칼로리: <span v-html="selectedEvent.sumcal"></span></div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </div>
            <div style="font-size: 13px; margin-top: 3vh;">
                <span>*본 정보는 국방부공공데이터 에서 가지고 오는 것입니다.</span>
                <br />
                <span>*실제 식단과 다를수 있습니다.</span>
            </div>
        </v-col>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: () => ({
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Month',
            week: 'Week',
            day: 'Day',
            '4day': '4 Days',
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        select_data: "",
        events: [],
        items: [
            {
                title: "조식",
                value: "breakfast"
            },
            {
                title: "중식",
                value: "Lunch"
            },
                        {
                title: "석식",
                value: "Dinner"
            }
        ],
        times: ""
    }),
    mounted() {
        this.$refs.calendar.checkChange()
    },
    methods: {

        viewDay({ date }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor(event) {
            return event.color
        },
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        async updateRange() {
            const events = []
            //생각을 해보자 친구여
            let foodmoth = await axios.get("http://localhost:1337/api/food-infos")
            foodmoth = foodmoth.data.data[0].attributes.food_info;
            for (let index = 0; index < foodmoth.length; index++) {
                    const time = foodmoth[index].dates.replace(/([가-힣()])+/g,'')
                    events.push( {
                        name: "식단정보",
                        start: time + "T00:00:00",
                        end: time + "T23:59:59",
                        sumcal: foodmoth[index].sumcal,
                        data: foodmoth[index].meal,
                        color: "blue darken-1",
                        "timed":true
                    })    
            }

            this.events = events
        }
    }
}
</script>