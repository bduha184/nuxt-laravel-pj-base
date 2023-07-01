<script setup lang="ts">
import { Url } from "@/constants/url";
</script>

<template>
  <NuxtLink :to="Url.TOP">
    <v-toolbar-title class="w-64"> amplify-nuxt3-sample </v-toolbar-title>
  </NuxtLink>
</template>
