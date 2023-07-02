<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRouter } from "nuxt/app";
import { Url } from "@/constants/url";
import constants from "@/plugins/common/toggleMenuItems";
const menuItems = constants.toggleMenuItems;

const router = useRouter();

const state = reactive({
  name: "",
  drawer: false,
});

const items = computed(() => {
  return [
    {
      text: "ホーム",
      icon: "mdi-account",
      func: () => router.push(Url.TOP),
    },
    {
      text: "マイページ",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "サイクリング募集",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "サイクリング情報",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "みんなの愛車",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "ルート検索",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "新規登録",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "ログイン",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
    {
      text: "ログアウト",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
  ];
});

const toggleMenu = () => {
  state.drawer = !state.drawer;
};
</script>

<template>
  <div>
    <v-navigation-drawer
      v-model="state.drawer"
      bottom
      temporary
      location="right"
      overlay-opacity="1"
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
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          @click="item.func"
        >
          <v-list-item-avatar start>
            <v-icon :icon="item.icon" />
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
        z-index="1010"
        @click.stop="toggleMenu"
      />
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
// @use '../assets/styles/mixin';
.v-toolbar-title__placeholder {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
