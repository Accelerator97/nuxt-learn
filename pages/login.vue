<template>
  <div>login</div>
</template>

<script setup>
useHead({
  // title: "登陆页",
  meta: [
    {
      name: 'description',
      content: '我是一个登陆页'
    }
  ],
  titleTemplate(titleChunk) {
    return titleChunk ? titleChunk + 'login' : 'hahaha'
  }
})
// 不想使用设置好的layout布局
definePageMeta({
  layout: false
})

console.log(`output->`, add(1, 1))
onMounted(() => {
  const route = useRoute();
  if (route.query.code) {
    ElMessage.error(route.query.code + '' + route.query.message)
  }
})
</script>

<style lang="scss" scoped>
</style>