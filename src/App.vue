<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <v-content class="ma-5">
      <v-row>
        <v-col cols="6" md="6" sm="12" xm="12">
          <WordToGuess :word="word" />
        </v-col>

        <v-col cols="6" md="6" sm="12" xm="12">
          <TypingArea
            ref="typingArea"
            @requestNewWord="handelNewWord"
            :answer="answer"
            :lang="lang"
            :word="word"
          />
        </v-col>

        <v-col cols="6" md="6" sm="12" xm="12">
          <Settings @settingsChanged="handelNewSettings" />
        </v-col>

        <v-col cols="6" md="6" sm="12" xm="12">
          <Say :lang="lang" />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
/* eslint-disable */

import Navbar from "@/components/Navbar.vue";
import WordToGuess from "@/components/WordToGuess.vue";
import TypingArea from "@/components/TypingArea.vue";
import Settings from "@/components/Settings.vue";
import Say from "@/components/Say.vue";

import findAWord from "./plugins/findAWord";

export default {
  components: {
    Navbar,
    WordToGuess,
    TypingArea,
    Settings,
    Say
  },
  data: () => ({
    word: "",
    answer: "",
    lang: "en",
    letters: ["all"]
  }),
  methods: {
    handelNewSettings(e) {
      let wordPromise = findAWord(e.letters, e.lang);
      this.lang = e.lang;
      this.letters = e.letters;

      wordPromise.then(question => {
        this.word = question.word;
        this.answer = question.answer;
      });

      //TODO: handel error
    },
    handelNewWord() {
      let wordPromise = findAWord(this.letters, this.lang);
      wordPromise.then(question => {
        this.word = question.word;
        this.answer = question.answer;
        this.$refs.typingArea.$emit("showNextBtn");
      });
    }
  },
  created() {
    this.handelNewWord();
  }
};
</script>