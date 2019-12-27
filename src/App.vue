<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>

    <v-content class="ma-5">
      <v-row>
        <v-col>
          <WordToGuess />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TypingArea />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Settings />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import WordToGuess from "@/components/WordToGuess.vue";
import TypingArea from "@/components/TypingArea.vue";
import Settings from "@/components/Settings.vue";

export default {
  components: {
    Navbar,
    WordToGuess,
    TypingArea,
    Settings
  }
};
</script>