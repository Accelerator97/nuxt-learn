<template>
  <div>
    i am error
    <div>{{ error.statusCode }}</div>
    <div>{{ error.message }}</div>
  </div>
</template>

<script setup>
// 在根目录定义一个error页面  只要有报错都会调转到这里
defineProps({
  error: Object
})
// 处理错误跳转到登陆页
clearError({ redirect: '/login' })

</script>

<style lang="scss" scoped>
</style>