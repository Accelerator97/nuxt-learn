<template>
  <div>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">首页</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">登陆页</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">about</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/userEdit">userEdit</NuxtLink>
        </li>
      </ul>
    </header>
    <slot></slot>
    <el-button type="primary" @click="clickMethod">点击</el-button>

    <el-button type="primary" @click="setToken">设置token</el-button>

    <el-button type="primary" @click="createError">创造错误</el-button>

    <footer>尾部</footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.custom {
  color: $myColor;
}
</style>