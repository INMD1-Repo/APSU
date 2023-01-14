<template>
    <div style="display: table;">
        <v-col style="margin-top: 3vh;">
            <v-list-item>
                <v-list-item-content>
                    <h2>환영합니다 XXX님!</h2>
                    <p>오늘도 활기찬 하루 보내세요!</p>
                </v-list-item-content>
                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>
        </v-col>
        <v-col class="main_frame">
            <!--간부 전용부분-->
            <h2>유동병력 사항</h2>
            <v-card style="margin-top: 1vh; margin-bottom: 2vh;">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5">2포대</v-list-item-title>
                        <v-list-item-subtitle>default: 생활관 구분(X)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <!--현재 인원 숫자로 표시-->
                <v-row no-gutters>
                    <v-col>
                        <v-card class="main_man pa-2" outlined tile>
                            <!--색이나 크기는 나중에 정하-->
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>test</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title >test</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-card>
                    </v-col>
                    <v-col>
                        <!--고정형 이기 때문에 추가 하지 않은 이상 수정하지 -->
                        <v-card class="pa-2" outlined tile>
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>test</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title >test</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>test</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>

            <h2>오늘 부대 식단표</h2>
            <!--식단표 for false-->
            <v-col class="mian_item">
                <v-card elevation="2" style="margin-right: 10px;">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-overline mb-1">Date</div>
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
                            <div class="text-overline mb-1">Date</div>
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
                            <div class="text-overline mb-1">Date</div>
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
    mounted() {

    }
}
</script>