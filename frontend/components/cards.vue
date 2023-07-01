<script setup lang="ts">
import contents from '@/plugins/common/contents'
import {ref} from 'vue';
import {Url} from '@/constants/url';


const items = computed(()=> {
  return [
    {
      text: 'TOP',
      disabled: false,
      href: Url.TOP,
    }
  ]
})

console.log(contents);
</script>


<template>
  <div>
    <v-breadcrumbs :items="items">
      <template #text="{ item }">
        {{ item.text }}
      </template>
    </v-breadcrumbs>
    <v-container :fluid="fluid">
      <v-card class="mx-auto">
        <v-card-title class="mb-3 card-header">
          {{ items[items.length - 1].text }}
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
