export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`output->my from`, from)
    console.log(`output->my to`, to)

    if (to.path === '/about') {
        // 这里return boolean 或者跳转新页面
        // 如果return false 后续的中间件不会执行 当前页面也不会放行跳转

        // return navigateTo("/login")
        return true
    }
})