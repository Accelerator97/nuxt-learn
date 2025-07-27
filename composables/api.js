export function api(url, options) {
    const config = useRuntimeConfig()
    const nuxtApp = useNuxtApp()
    return $fetch(url, {
        baseURL: config.public.baseURL,
        onRequest({ options }) {
            let token = userStore().getToken()
            // options.headers = {
            //     Authorization: `Bearer ${token}`,
            //     ...options.headers
            // }
            options.headers = {
                Cookie: `token=${token}`,
                ...options.headers
            }
        },
        onResponse({ response }) {
            // 
            if (response.status !== 200) {
                if (import.meta.client) {
                    ElMessage.error("错啦")
                } else {
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
                return Promise.reject(response._data)
            }
            return response._data
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
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}