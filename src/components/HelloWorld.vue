<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
.left {
  width: 200px;
  height: 80px;
  background-color: aqua;
}

.right {
  width: 50px;
  height: 50px;
  background-color: blue;
  margin-left: auto;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings {
  display: flex;
  width: 100vw;
  background-color: black;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
