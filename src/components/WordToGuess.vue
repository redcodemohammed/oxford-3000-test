<template>
  <v-card class="pa-5 text-center">
    <p class="display-4">{{_word}}</p>
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
