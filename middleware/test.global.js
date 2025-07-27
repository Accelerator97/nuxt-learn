export default defineNuxtRouteMiddleware((to, from) => {
    const paseURL = ['/', '/login', '/about', '/index', '/myError']
    if (!paseURL.includes(to.path)) {
        let token = ""
        // 有种场景就是  客户端设置的token 服务端是获取不到的
        // 相反 服务端设置的token 是可以被客户端获取到
        // 为了解决第一种情况，可以把token通过pinia持久化插件设置到cookie中
        // 这样服务端也能通过pinia持久化插件获取到token
        token = userStore().getToken()
        if (!token) {
            return navigateTo({
                path: '/login',
                query: {
                    code: 401,
                    message: '请先登录'
                }
            })
        }
    }
})