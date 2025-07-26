<template>
  <div>my Error</div>
  <NuxtPage></NuxtPage>
</template>

<script setup>
onMounted(() => {
  const route = useRoute();
  console.log(`output->route`, route)
  if (route.query.code) {
    ElMessage.error(route.query.code + '' + route.query.message)
  }
})
</script>

<style lang="scss" scoped>
</style>