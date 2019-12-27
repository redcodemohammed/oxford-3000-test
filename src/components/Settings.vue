<template>
  <v-card class="px-5">
    <v-row>
      <v-col>
        <v-radio-group v-model="lang" row label="Language:">
          <v-radio label="English" value="en"></v-radio>
          <v-radio label="Arabic" value="ar"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-divider class="mb-5"></v-divider>
    <v-row>
      <v-col cols="8">
        <v-select
          @change="checkIfAll"
          outlined
          v-model="letter"
          :items="letters"
          attach
          chips
          label="Letters"
          multiple
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn height="65" color="info">Reset</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    lang: "en",
    letter: ["all"],
    letters: "abcdefghijklmnopqrstuvwxyz".split("")
  }),
  created() {
    this.letters.unshift("all");
  },
  methods: {
    checkIfAll() {
      if (this.letter.includes("all")) this.letter = ["all"];
    }
  }
};
</script>



