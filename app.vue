<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>  

useHead({
  title: "首页",
  meta: [
    {
      name: 'description',
      content: '我是一个首页'
    }
  ]
})

// 只在客户端执行
// if (import.meta.client) {
//   const res = await $fetch('https://api.ebag.readboy.com/examination-single-school/v1/subject/get?school_id=10001')
// }


// useAsyncData的回调函数 只会在服务端执行一次 客户端不执行
// 原理是维护一个缓存，服务端结果后把结果存入到缓存，key是映射值
// 客户端再次执行 会返回缓存的结果
// 注意第一个参数key要固定 不然不会产生上述特性
// const res = await useAsyncData('key', async () => {
//   return await $fetch('https://api.ebag.readboy.com/examination-single-school/v1/subject/get?school_id=10001')
// })

// 可以封装到一个函数里 给元素添加点击事件 这样客户端
// const clickMethod = async () => {
//   const res = await useAsyncData('key', async () => {
//     console.log(`output->111`)
//     return await $fetch('https://api.ebag.readboy.com/examination-single-school/v1/subject/get?school_id=10001')
//   })
//   console.log(`output->res`, res)
// }

// useFecth是$fetch和useAsyncData的语法糖，可以不使用await 
// refresh 是重新发一次请求
// 延迟数据加载：默认情况下（没有 lazy），useFetch 会阻塞导航直到数据加载完成
// 使用 lazy: true 时，页面会立即渲染，数据在 hydration 后异步加载
// status是状态  分为pending和success
// useFetch有一个大坑：当传入的参数是一个响应式数据，如果响应式数据变动会自己重新发送请求
// const url = 'https://api.ebag.readboy.com/examination-single-school/v1/subject/get?school_id=10001'
// const { refresh, data: { value },status } = useFetch(url, {
//   lazy: true
// })


// await getApi('/v1/subject/get?school_id=10001')


const clickMethod = async () => {
  const res = await getApi('/v1/subject/get?school_id=10001')
  console.log(`output->get res`, res)
}

const setToken = () => {
  // window.localStorage.setItem('token', 456)
  // userStore是一个函数，需要调用
  userStore().setToken('hahaha')
  console.log(`output->userStore().getToken()`, userStore().getToken())
}

// useState定义的数据 客户端、服务端都能够共享 客户端不会重新定义
// let count = useState('count', () => {
//   return 1
// })
// count.value++
// console.log(`output->`, count.value)

function createError() {
  showError({ statusCode: 200, message: 'hahah' })
}
</script>


<style lang="scss" scoped>
</style>