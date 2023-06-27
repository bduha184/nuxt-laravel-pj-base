<script setup>


</script>


<template>
  <div
    class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="flex flex-row">
            <font-awesome-icon class="fa-3x mr-1" icon="fas fa-user-circle" />
            <div>
              <div class="font-weight-bold">ユーザー名</div>
              <div class="font-weight-lighter">2020/2/1 12:00</div>
            </div>
          </div>
          <div class="pt-0 pb-2">
            <h3 class="h4 py-4">記事タイトル</h3>
            <div class="card-text">記事本文</div>
          </div>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </div>
    </div>
  </div>
</template>
