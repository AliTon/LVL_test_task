import { INews } from '../interfaces'
import axiosInstance from '../../../configureApp/axiosInstance'

export const getNews = async (): Promise<Array<INews>> => {
    const response = await axiosInstance.get('/news')
    return response.data
}
