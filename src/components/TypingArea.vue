<template>
  <v-card class="pa-5">
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-text-field outlined name="userGuess" label="The Word"></v-text-field>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn height="55" dark>
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
      </v-col>
      <v-col class="mx-3" cols="2">
        <v-btn height="55" dark>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

