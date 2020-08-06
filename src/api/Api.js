import * as axios from "axios";

const settings = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b61c59bc-c21c-4a07-9ff4-5b299b2d5ced'}
})

export const getUsers = (currentPage, pageSize) => {
    return settings.get(`users?page=${currentPage}&count=${pageSize}`).then ( response => response.data )
}

export const followUsers = (id) => {
    return settings.delete(`follow/${id}`).then ( response => response.data )
}
export const unfollowUsers = (id) => {
    return settings.post(`follow/${id}`).then ( response => response.data )
}


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return settings.get(`users?page=${currentPage}&count=${pageSize}`).then ( response => response.data )
    },
    followUsers (id) {
       return settings.delete(`follow/${id}`).then ( response => response.data )
    },
    unfollowUsers (id) {
        return settings.post(`follow/${id}`).then ( response => response.data )
    }
}