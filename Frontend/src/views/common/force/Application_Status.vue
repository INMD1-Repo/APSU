<template>
    <div style="display: table">
        <!--이건 더미다-->
        <v-col></v-col>
        <v-col class="force_frame">
            <h1>유동병력 신청 진행</h1>
            <p style="font-size: 1rem">조회만 가능하며 이의 사항은 간부님에게 문의해주십시오</p>
            <v-card style="width: 90vw;">
                <v-card-text>
                    <v-text-field
                        :loading="loading"
                        density="compact"
                        variant="solo"
                        label="Search templates"
                        append-inner-icon="fa-magnifying-glass"
                        single-line
                        hide-details
                        @click:append-inner="onClick"
                    ></v-text-field>
                </v-card-text>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    data: () => ({
        loaded: false,
        loading: false,
    }),

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>