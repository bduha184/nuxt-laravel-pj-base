<script setup></script>

<template>
  <v-app
  dark
  >
  <Header/>
  <v-main>
    <Contents/>
    <slot/>
  </v-main>
  <Footer/>
  </v-app>
</template>
