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
          label="Your Answer"
        ></v-text-field>
      </v-col>
      <v-btn-toggle>
        <v-btn v-if="!hintBtn" @click="showHint">
          <v-row>
             <v-icon>mdi-comment-question</v-icon>
          </v-row>
          <v-row>
          <span bottom>Hint</span>
          </v-row>
</v-btn>
        <v-btn @click="say">
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
        <v-btn @click="saySlow">
          <v-icon>mdi-speedometer-slow</v-icon>
        </v-btn>
        <v-btn :disabled="!nextBtn" @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
</v-btn-toggle>
    </v-row>
    <v-snackbar v-model="hint" color="info" left multi-line :timeout="2000" top>
      {{ hintMsg }}
      <v-btn dark text @click="hint = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="showAnswer" color="error" bottom multi-line :timeout="3000">
      {{ answer }}
      <v-btn dark text @click="showAnswer = false">Close</v-btn>
    </v-snackbar>
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
    errorSound: new Audio(require("../assets/mp3/buzzer.mp3")),
    hint: false,
    histPostion: 1,
    hintMsg: "",
    showAnswer: false,
    hintBtn: false,
    nextBtn: true
  }),
  methods: {
    enter() {
      if (this.answer !== this.inputAnswer.toLowerCase()) {
        this.error = true;
        this.success = false;
        this.errorSound.play();
      } else {
        this.error = false;
        this.success = true;
        this.successSound.play();
        this.histPostion = 1;
        this.inputAnswer = "";
        this.$emit("requestNewWord");
      }
    },
    next() {
      this.nextBtn = false;
      this.showAnswer = true;
      setTimeout(() => {
        this.hintBtn = false;
        this.inputAnswer = "";
        this.error = false;
        this.success = false;
        this.histPostion = 1;
        this.$emit("requestNewWord");
      }, 4000);
    },
    say() {
      tts.normall.speak(this.lang === "en" ? this.word : this.answer);
    },
    saySlow() {
      tts.slow.speak(this.lang === "en" ? this.word : this.answer);
    },
    showHint() {
      let answer = this.answer;
      let postion = this.histPostion;
      this.hintMsg = answer.slice(0, postion);
      this.hint = true;
      this.histPostion++;
      if (this.histPostion === this.answer.length + 1) {
        this.hint = false;
        this.hintBtn = true;
        this.histPostion = 0;
        this.errorSound.play();
        this.error = true;
        this.next();
      }
    }
  },
  created() {
    this.$on("showNextBtn", () => {
      this.nextBtn = true;
    });
  }
};
</script>
