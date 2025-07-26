<template>
  <div>login</div>
</template>

<script setup>
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