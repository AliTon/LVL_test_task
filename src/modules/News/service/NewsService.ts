import { IComment, INews } from '../interfaces'
import axiosInstance from '../../../configureApp/axiosInstance'

export const getNews = async (orderBy?: string): Promise<INews[]> => {
    let url = '/news'
    if (orderBy) {
        const search = {
            orderBy,
            order: 'desc',
        }
        const searchParams = new URLSearchParams(search)
        url += `?${searchParams.toString()}`
    }

    const response = await axiosInstance.get(url)
    return response.data
}

export const getNewsById = async (id: string): Promise<INews> => {
    const response = await axiosInstance.get(`/news/${id}`)
    return response.data
}

export const getNewsComments = async (id: string): Promise<IComment[]> => {
    const response = await axiosInstance.get(`/news/${id}/comments`)
    return response.data
}
