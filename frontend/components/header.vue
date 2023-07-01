<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRouter } from "nuxt/app";
import { Url } from "@/constants/url";
import constants from "@/plugins/common/toggleMenuItems";
const menuItems = constants.toggleMenuItems;

const router = useRouter();

const state = reactive({
  name:"",
  drawer:false
})

const items = computed(() => {
  return [
    {
      text: "マイページ",
      icon: "mdi-account",
      func: () => router.push(Url.MEMBER),
    },
  ];
});

const toggleMenu = () => {
  state.drawer = !state.drawer
}

</script>

<template>
  <div>
      <v-app-bar class="overflow-visible px-2" color="primary" prominent>
        <logo />
        <v-spacer />
          <NuxtLink :to="Url.LOGIN" class="invisible md:visible">
            ログイン
          </NuxtLink>

        <v-app-bar-nav-icon
          variant="text"
          class="text-white visible md:invisible"
          @click.stop="toggleMenu"
        />
      </v-app-bar>
      <v-navigation-drawer v-model="state.drawer" bottom temporary location="right">
        <v-list>
          <v-list-item
            prepend-avatar="/images/user_dummy.png"
            subtitle="Logged in"
          />
        </v-list>
        <v-divider />
        <v-list density="compact">
          <v-list-subheader>Menu</v-list-subheader>
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
    </div>
</template>

<style lang="scss" scoped>
// @use '../assets/styles/mixin';
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
