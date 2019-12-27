<template>
  <v-card class="pa-5">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-text-field
          :error="error"
          :success="success"
          @keypress.enter="enter"
          v-model="inputAnswer"
          outlined
          label="The Word"
        ></v-text-field>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn @click="say" height="55" dark>
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn @click="saySlow" height="55" dark>
          <v-icon>
            mdi-speedometer-slow
          </v-icon>
        </v-btn>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn @click="next" height="55" dark>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import tts from "../plugins/tts";

export default {
  props: ["answer", "lang", "word"],
  data: () => ({
    inputAnswer: "",
    error: false,
    success: false,
    successSound: new Audio(require("../assets/mp3/bell.mp3")),
    errorSound: new Audio(require("../assets/mp3/buzzer.mp3"))
  }),
  methods: {
    enter() {
      if (this.answer !== this.inputAnswer) {
        this.error = true;
        this.success = false;
        this.errorSound.play();
      } else {
        this.error = false;
        this.success = true;
        this.successSound.play();

        this.inputAnswer = "";
        this.$emit("requestNewWord");
      }
    },
    next() {
      this.inputAnswer = "";
      this.error = false;
      this.success = false;

      this.$emit("requestNewWord");
    },
    say() {
      tts.normall.speak(this.lang === "en" ? this.word : this.answer);
    },
    saySlow() {
      tts.slow.speak(this.lang === "en" ? this.word : this.answer);
    }
  }
};
</script>
