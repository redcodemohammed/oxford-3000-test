<template>
  <v-card min-height="236" class="pa-5">
     <v-card-title>
      Word To Guess
     </v-card-title>
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-text-field @keypress.enter="enter" v-model="word" outlined label="The Word"></v-text-field>
      </v-col>
      <v-btn-toggle>
        <v-btn :disabled="!word" @click="say">
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
        <v-btn :disabled="!word" @click="saySlow">
          <v-icon>mdi-speedometer-slow</v-icon>
        </v-btn>
        <v-btn :loading="loading" :disabled="!word" @click="translate">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </v-btn-toggle>
      <p>Note: Text to speech won't work for arabic words</p>
    </v-row>
    <v-snackbar v-model="translation" color="secondary" left multi-line :timeout="6000" top>
      {{ translationResult }}
      <v-btn dark text @click="translation = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import tts from "../plugins/tts";
import tran from "../plugins/tran";

export default {
  props: ["lang"],
  data: () => ({
    word: "",
    translation: false,
    translationResult: "",
    loading: false
  }),
  methods: {
    enter() {
      tts.normall.speak(this.word);
    },
    next() {
      this.inputAnswer = "";
      this.error = false;
      this.success = false;

      this.$emit("requestNewWord");
    },
    say() {
      tts.normall.speak(this.word);
    },
    saySlow() {
      tts.slow.speak(this.word);
    },
    translate() {
      this.loading = true;
      tran.translate(this.word, { to: this.lang }, (err, arabicWord) => {
        if (!err) {
          this.translationResult = arabicWord.text.join("");
          this.translation = true;
        }
        this.loading = false;
      });
    }
  }
};
</script>
