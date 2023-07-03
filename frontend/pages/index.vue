<script setup>
import { computed, onBeforeMount } from 'vue'
import { Url } from "@/constants/url";
import { useRouter } from "nuxt/app";
import { mdiAccount } from '@mdi/js'
const router = useRouter();
const menuLinks = computed(()=> {
  return [
  {
      text: "ホーム",
      icon: "mdiAccount",
      func: () => router.push(Url.TOP),
    },
    {
      text: "マイページ",
      icon: "mdiAccount",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "サイクリング募集",
      icon: "mdiAccount",
      func: () => router.push(Url.RECRUIT),
    },
    {
      text: "サイクリング情報",
      icon: "mdiAccount",
      func: () => router.push(Url.INFO),
    },
    {
      text: "みんなの愛車",
      icon: "mdiAccount",
      func: () => router.push(Url.INTRODUCTION),
    },
    {
      text: "ルート検索",
      icon: "mdiAccount",
      func: () => router.push(Url.SEARCH),
    },
    {
      text: "新規登録",
      icon: "mdiAccount",
      func: () => router.push(Url.SIGNUP),
    },
    {
      text: "ログイン",
      icon: "mdiAccount",
      func: () => router.push(Url.LOGIN),
    },
  ]
})
</script>


<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(item, index) in menuLinks" :key="index" cols="6" md="4">
          <v-card
          @click="item.func"
          >
              <v-icon :icon="mdiAccount">
              </v-icon>
              <v-card-title>
                {{ item.text }}
              </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
