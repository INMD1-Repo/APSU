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
                        v-model="value"
                        :weekdays="weekday"
                        :type="type"
                        :events="events"
                        :event-overlap-mode="mode"
                        :event-overlap-threshold="30"
                        :event-color="getEventColor"
                        @change="getEvents"
                    ></v-calendar>
                </v-sheet>
            </div>
            <div style="font-size: 13px; margin-top: 3vh;">
                <span>*본 정보는 국방부공공데이터 에서 가지고 오는 것입니다.</span><br>
                <span>*실제 식단과 다를수 있습니다.</span>
            </div>
            </v-col>
    </div>
</template>
<script>
export default {
    data: () => ({
        type: 'month',
        types: ['month', 'week', 'day', '4day'],
        mode: 'stack',
        modes: ['stack', 'column'],
        weekday: [0, 1, 2, 3, 4, 5, 6],
        weekdays: [
            { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
            { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
            { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
            { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        ],
        value: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    methods: {
        getEvents({ start, end }) {// eslint-disable-line no-unused-vars

        },
        getEventColor(event) {
            return event.color
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    }
}
</script>