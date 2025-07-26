<template>
  <div>login</div>
</template>

<script setup>

onMounted(() => {
  const route = useRoute();
  if (route.query.code) {
    console.log(`output->route`, route.query)
    ElMessage.error(route.query.code + '' + route.query.message)
  }
})
</script>

<style lang="scss" scoped>
</style>