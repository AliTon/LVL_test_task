import React from 'react'
import { Link } from 'react-router-dom'
import { INews } from '../../interfaces'
import { NewsCardStyle } from './NewsCard.srtles'

type Props = {
    data: INews
}

const NewsCard = (data: Props) => {
    const { createdAt, name, views, image, author, text, id } = data.data

    return (
        <NewsCardStyle>
            <Link to={`/news/${id}`}>{name}</Link>
            <div>{text}</div>
            <img src={image} height={'100px'} />
            <div>{author}</div>
            view: <big>{views}</big>
            id: <big>{id}</big>
            createdAt: <span>{createdAt}</span>
        </NewsCardStyle>
    )
}
export default NewsCard
