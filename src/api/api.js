import axios from 'axios'

export const API_URL = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const postsAPI = {
    async fetchPosts() {
        try {
            const response = await instance.get(`posts`)
            return response.data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    },
}
