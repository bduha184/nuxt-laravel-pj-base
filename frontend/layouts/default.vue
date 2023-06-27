<script setup>

const {users} = await useAsyncGql('getUsers');
console.log(users);


</script>

<template>
<div>
  <Header/>
  <Card/>
  <div>
  </div>
  <slot/>
</div>
</template>
