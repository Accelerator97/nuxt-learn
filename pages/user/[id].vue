<template>
  user Id :{{ id }}
</template>

<script setup>
const id = ref("")
const route = useRoute()
id.value = route.params.id

console.log(`output->id`, id)

</script>

<style lang="scss" scoped>
</style>