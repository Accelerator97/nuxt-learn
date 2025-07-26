<template>
  <div>首页</div>
</template>

<script setup>
if (import.meta.server) {
  // navigateTo('/login') // 客户端或者服务端都能用

}
const router = useRouter() // 只能在客户端运行
router.push('/login')

// 跳转之后的代码 只会在服务端运行 客户端不会运行
console.log(`output->跳转之后的代码`)
</script>

<style lang="scss" scoped>
</style>