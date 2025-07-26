export default defineNuxtRouteMiddleware((to, from) => {
    const paseURL = ['/', '/login', '/about', '/index']
    console.log(`output->全局 to`, to)
    if (!paseURL.includes(to.path)) {
        let token = ""
        if (import.meta.client) {
            token = localStorage.getItem('token')
        }
        if (!token) {
            return navigateTo({
                path: '/login',
                query: {
                    code: 401,
                    message: "请先登陆"
                }
            })
        }
    }
})