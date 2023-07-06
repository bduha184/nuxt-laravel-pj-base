<script setup>
import { computed, onBeforeMount } from 'vue'
import { Url } from "@/constants/url";
import { useRouter } from "nuxt/app";
import { mdiAccount ,mdiHome,mdiAccountCircle,mdiBike,mdiInformation,mdiMapMarker,mdiBicycle} from '@mdi/js'
const router = useRouter();
const menuLinks = computed(()=> {
  return [
    {
      text: "マイページ",
      icon: mdiAccount,
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "新規登録",
      icon: mdiAccount,
      func: () => router.push(Url.SIGNUP),
    },
    {
      text: "サイクリング募集",
      icon: mdiBike,
      func: () => router.push(Url.RECRUIT),
    },
    {
      text: "みんなの愛車",
      icon: mdiBicycle,
      func: () => router.push(Url.INTRODUCTION),
    },
    {
      text: "サイクリング情報",
      icon: mdiInformation,
      func: () => router.push(Url.INFO),
    },
    {
      text: "ルート検索",
      icon: mdiMapMarker,
      func: () => router.push(Url.SEARCH),
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
          class="text-center border w-60 h-60 m-auto d-flex flex-column justify-center align-center"
          >
              <v-icon
              :icon="item.icon"
              class="relative before:absolute before:w-10 before:h-10 before:border-2 before:border-gray-400 before:rounded-full"
              >
              </v-icon>
              <v-card-title
              class="relative before:absolute before:w-2 before:h-10 before:bg-orange-600 before:left-0"
              >
                {{ item.text }}
              </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<style scoped>
.v-card--variant-elevated{
  box-shadow: none;
}
</style>
