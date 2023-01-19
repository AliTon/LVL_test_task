export interface IComment {
    author: string
    avatar: string
    createdAt: string
    id: string
    newsId: string
    text: string
}

export interface INews {
    createdAt: string
    name: string
    views: string
    image: string
    author: string
    text: string
    id: string
    comments?: IComment[]
}
