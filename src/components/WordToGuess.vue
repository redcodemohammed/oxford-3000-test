<template>
  <v-card class="pa-5 text-center">
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
