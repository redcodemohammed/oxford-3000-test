<template>
  <v-card class="px-5">
  <v-card-title>
   Setttings
  </v-card-title>
    <v-row>
      <v-col>
        <v-radio-group @change="returnNewData" v-model="lang" row label="Language:">
          <v-radio label="English" value="en"></v-radio>
          <v-radio label="Arabic" value="ar"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-divider class="mb-5"></v-divider>
    <v-row>
      <v-col cols="8">
        <v-select
          @change="returnNewData"
          outlined
          v-model="letters"
          :items="lettersItems"
          attach
          chips
          label="Letters"
          multiple
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn @click="reset" height="65" color="info">Reset</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    lang: "en",
    letters: ["all"],
    lettersItems: "abcdefghijklmnopqrstuvwxyz".split("")
  }),
  created() {
    this.lettersItems.unshift("all");
  },
  methods: {
    returnNewData() {
      if (this.letters.includes("all")) this.letters = ["all"];
      this.$emit("settingsChanged", { lang: this.lang, letters: this.letters });
    },
    reset() {
      this.letters = ["all"];
      this.lang = "en";
      this.returnNewData();
    }
  }
};
</script>



