<template>
  <div class="panel">
    <!-- 顶部标题 -->
    <h1 class="title">劳资蜀道山</h1>

    <!-- 中间切换tab -->
    <div class="tabs">
      <el-tabs v-model="activeTabsName" type="border-card" stretch>
        <el-tab-pane name="account">
          <!-- label插槽 -->
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <div class="text">账号登陆</div>
            </div>
          </template>
          <!-- 账号的内容 -->
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone" disabled>
          <!-- label插槽 -->
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <div class="text">手机登陆</div>
            </div>
          </template>
          <!-- 手机的内容 -->
          <PanePhone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeTabsName = ref('account')
const isRemPwd = ref(false) // 没传值的时候,可以使用泛型约束
const accountRef = ref<InstanceType<typeof PaneAccount>>() // PaneAccount是实例

const handleLoginBtnClick = () => {
  if (activeTabsName.value === 'account') {
    // 1. 获取子组件实例
    accountRef.value?.loginAction()
  } else {
    console.log('用户在账号登陆')
  }
}
</script>

<style lang="less" scope>
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
