export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`output-> 全局2 from`, from)
    console.log(`output-> 全局2 to`, to)

    if (to.path === '/about') {
        // 这里return boolean 或者跳转新页面
        // 如果return false 后续的中间件不会执行 当前页面也不会放行跳转
        // 如果return true 后续的中间件会执行，页面会放行
        // 如果return navigateTo("/login")  后续的中间件不会执行 页面会放行
        return true
    }
})