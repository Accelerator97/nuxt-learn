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
    <router-view></router-view>
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