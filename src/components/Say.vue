<template>
  <v-card class="pa-5">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-text-field @keypress.enter="enter" v-model="wordToSay" outlined label="The Word"></v-text-field>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn @click="say" height="55" dark>
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn @click="saySlow" height="55" dark>
          <v-icon>mdi-speedometer-slow</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import tts from "../plugins/tts";

export default {
  data: () => ({
    wordToSay: ""
  }),
  methods: {
    enter() {
      tts.normall.speak(this.wordToSay);
    },
    next() {
      this.inputAnswer = "";
      this.error = false;
      this.success = false;

      this.$emit("requestNewWord");
    },
    say() {
      tts.normall.speak(this.wordToSay);
    },
    saySlow() {
      tts.slow.speak(this.wordToSay);
    }
  }
};
</script>
