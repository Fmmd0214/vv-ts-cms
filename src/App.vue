<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登陆</router-link>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(0);
</script>

<style scoped></style>
