export function api(url, options) {
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    return useFetch(url, {
        baseURL: config.public.baseURL,
        onRequest({ options }) {
            let token = import.meta.client ? localStorage.getItem('token') || '' : ''
            console.log(`output->token`, token.at, typeof token)
            options.headers = {
                Authorization: `Bearer ${token}`,
                ...options.headers
            }
        },
        onResponse({ response }) {
            // TODO:这里判断响应头逻辑
            if (response.status !== 200) {
                if (import.meta.client) {
                    ElMessage.error("错啦")
                } else {
                    console.log(`output->导航`)
                    nuxtApp.runWithContext(() => {
                        navigateTo({
                            path: '/myError',
                            query: {
                                code: '202',
                                message: '我错啦'
                            }
                        })
                    })
                }
            }
        },
        onResponseError({ response }) {
            // TODO: 同上
        },
        ...options
    })
}


export function getApi(url, options) {
    return new Promise((resolve, reject) => {
        api(url, {
            method: "get",
            ...options
        }).then(res => {
            resolve(res.data.value)
        }).catch(e => {
            reject(e)
        })
    })
}