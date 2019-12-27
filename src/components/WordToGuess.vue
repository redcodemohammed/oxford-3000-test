<template>
  <v-card min-height="228" class="pa-5 text-center">
    <p class="display-3">{{_word}}</p>
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