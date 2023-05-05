import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const instance_django = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export async function get_posts(limit) {
    try {
        const response = await instance.get(`posts?_limit=${limit}`)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function get_comments(limit) {
    try {
        const response = await instance.get(`comments?_limit=${limit}`)
        return response
    } catch (error) {
        console.error(error)
    }
}

export async function get_users() {
    try {
        const response = await instance_django.get("users/")
        return response
    } catch (error) {
        console.error(error)
    }
}
