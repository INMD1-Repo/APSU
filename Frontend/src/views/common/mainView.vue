<template>
    <div style="display: table;">

        <v-col style="margin-top: 3vh;">
            <h2>환영합니다 XXX님!</h2>
            <p>오늘도 활기찬 하루 보내세요!</p>
        </v-col>
        <v-col class="main_frame">
            <!--간부 전용부분-->
            <h2>유동병력 사항</h2>
            <v-card style="margin-top: 1vh; margin-bottom: 2vh;">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5">2포대</v-list-item-title>
                        <v-list-item-subtitle>setting: 생활관 구분(X)</v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>
                <div style="display: flex">
                    <v-col></v-col>
                    <v-col></v-col>
                </div>
            </v-card>

            <h2>오늘 부대 식단표</h2>
            <!--식단표 for false-->
            <v-col class="mian_item">
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-4">Date</div>
                            <v-list-item-title class="text-h5 mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-4">Date</div>
                            <v-list-item-title class="text-h5 mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-4">Date</div>
                            <v-list-item-title class="text-h5 mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <!--승인 현황-->
            <h2 style="margin-bottom: 1vh;">승인 현황</h2>
            <v-card style="overflow: auto; height: 25vh;" class="mx-auto" tile>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
                        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
                        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
                        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
                        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary line text Lorem ipsum dolor sit amet,</v-list-item-subtitle>
                        <v-list-item-subtitle>consectetur adipiscing elit.</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>
        <!--아도 몰라 이거 있어야 될거 같해-->
        <div style="height: 8vh;"></div>
    </div>
</template>
<script>
export default {
    data: () => {

    },
    mounted (){
        
    }
}
</script>