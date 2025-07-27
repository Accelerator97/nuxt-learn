import { defineStore } from "pinia";

export const userStore = defineStore('userStore', () => {
    const token = ref('')

    const setToken = (val) => {
        token.value = val
    }

    const getToken = () => {
        return token.value
    }

    return { token, setToken, getToken }
}, {
    persist: true // 默认cookie存储
})