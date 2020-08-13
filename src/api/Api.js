import * as axios from 'axios'

const settings = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b61c59bc-c21c-4a07-9ff4-5b299b2d5ced'}
})

export const getUsersAPI = (currentPage, pageSize) => {
    return settings.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const followUsersAPI = (id) => {
    return settings.delete(`follow/${id}`).then(response => response.data)
}
export const unfollowUsersAPI = (id) => {
    return settings.post(`follow/${id}`).then(response => response.data)
}

export const getMyPageProfileAPI = (userId) => {
    return settings.get(`profile/${userId}`).then(response => response.data)
}

export const getMyAccountPageAuthAPI = () => {
    return settings.get(`auth/me`).then(response => response.data)
}

export const getStatusProfileAPI = (userId) => {
    return settings.get(`profile/status/${userId}`).then(response => response.data)
}

export const updateStatusProfileAPI = () => {
    return settings.put(`profile/status`).then(response => response.data)
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return settings.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUsers(id) {
        return settings.delete(`follow/${id}`).then(response => response.data)
    },
    unfollowUsers(id) {
        return settings.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    getMyAccountPage() {
        return settings.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getMyProfilePage (userId) {
        return settings.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return settings.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatusProfileAPI(status) {
        return settings.put(`profile/status`, status).then(response => response.data)
    }
}