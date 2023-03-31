<template>
  <div class="main">
    <h2>main:{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "@/store/counter";

const counterStore = useCounterStore();

function changeCounter() {
  counterStore.changeCounterAction(999);
}
</script>

<style lang="less" scope>
.main {
  color: red;
}
</style>
