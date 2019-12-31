<template>
  <v-card class="pa-5 text-center">
  <v-card-title>
      Word To Guess
  </v-card-title>
  <blockquote class="blockquote">
    {{_word}}
  </blockquote>
  </v-card>
</template>
<script>
export default {
  props: ["word"],
  computed: {
    _word() {
      if (this.word) return this.word;
      return "Loading...";
    }
  }
};
</script>
