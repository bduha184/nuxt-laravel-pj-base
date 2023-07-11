<template>
  <div>
    <v-form @submit.prevent="onSubmit" class="d-flex">
      <v-text-field
      v-model="setQuery"
        dense
        hide-details
        clearable
        placeholder="キーワードを入力"
        :solo="isFocused"
        :filled="!isFocused"
        :style="{ minWidth: '180px' }"
        @focus="focus"
        @blur="blur"
        class="h-10"
      ></v-text-field>
      <v-btn type="submit" class="mt-2 w-20">検索</v-btn>
    </v-form>
  </div>
</template>
