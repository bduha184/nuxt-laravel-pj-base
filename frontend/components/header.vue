<script setup lang="ts">
import { computed, reactive } from "vue";
import { Url } from "@/constants/url";
import {MenuItems} from "@/constants/menuItems";
import { useRouter } from "nuxt/app";
const router = useRouter();
import { mdiAccount } from '@mdi/js'

const state = reactive({
  name: "",
  drawer: false,
});

const toggleMenu = () => {
  state.drawer = !state.drawer;
};

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

</script>ˇ

<template>
  <div>
    <v-navigation-drawer
      v-model="state.drawer"
      bottom
      temporary
      location="right"
      class="pt-15"
    >
      <v-list>
        <v-list-item
        prepend-avatar="/images/user_dummy.png"
        subtitle="Logged in"
        />
      </v-list>
      <v-divider />
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in menuLinks"
          :key="i"
          :value="item"
          active-color="primary"
          @click="item.func"
        >
          <v-list-item-avatar>
            <!-- <v-icon :icon="item.icon" /> -->
            <v-icon :icon="mdiAccount" />
          </v-list-item-avatar>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="overflow-visible px-2" color="primary" prominent>
      <!-- <logo /> -->
      <v-toolbar-title
      class="text-red font-weight-bold"
        >Cycle Community</v-toolbar-title
      >
      <v-spacer />
      <NuxtLink :to="Url.LOGIN" class="invisible md:visible">
        ログイン
      </NuxtLink>

      <v-app-bar-nav-icon
        variant="text"
        class="text-white visible md:invisible"
        color="red"
        @click.stop="toggleMenu"
      />
    </v-app-bar>
  </div>
</template>
