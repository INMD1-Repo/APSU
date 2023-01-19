<template>
  <div style="display: table">
    <!--이건 더미다-->
    <v-col></v-col>
    <v-col class="force_frame">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="20vh"
        max-width="94vw"
        src="https://picsum.photos/id/11/500/300"
        style="margin-bottom: 5vh"
      ></v-img>
      <!--간부용-->
      <h3>대대 유동병력 상황</h3>
      <v-select
        v-model="variant"
        :items="items"
        clearable
        label="Variant"
      ></v-select>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-treeview activatable color="warning" :items="items"></v-treeview>
      </v-card>
    </v-col>
    <!--아도 몰라 이거 있어야 될거 같해-->
    <div style="height: 8vh"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
      items: [
        {
          id: 1,
          name: '본부포대 :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: '1포대 :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: '2포대 :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: '3포대 :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
    }),
};
</script>
