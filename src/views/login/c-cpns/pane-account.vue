<template>
  <div class="pane-phone">
    <el-form :model="account" :rules="accountRules" status-icon label-width="60px" size="large">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

const account = reactive({
  name: '',
  password: '',
})

// 自定义校验规则(不需要响应式)
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20位数字或字母组成~', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '必须是3位以上的数字或字母组成~ ', trigger: 'blur' },
  ],
}

// 帐号的登陆逻辑
function loginAction() {
  console.log('pane-account location function exection')
}

defineExpose({
  loginAction,
})
</script>

<style lang="less" scope>
.pane-phone {
}
</style>
