import React from 'react'

import { Card } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNews } from '../redux/selectors/newsSelector'
import { getNewsFeed } from '../redux/slices/newsSlice'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import CommentsList from '../../../components/Comments'

const NewsPageDetails = () => {
    const news = useAppSelector(selectNews)
    const dispatch = useAppDispatch()

    const singleNews = news[0]
    const { Meta } = Card

    React.useEffect(() => {
        dispatch(getNewsFeed())
    }, [dispatch])

    return (
        <>
            <Card style={{ width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <img
                        alt="img"
                        src={singleNews.image}
                        style={{ maxWidth: '600px', width: '100%' }}
                    />
                </div>
                <div>
                    <Meta
                        title={singleNews.name}
                        description={<div>{singleNews.text}</div>}
                    />
                    <div className="info">
                        <div>
                            <UserOutlined /> author: {singleNews.author}
                        </div>
                        <div>
                            <EyeOutlined /> {singleNews.views}
                        </div>
                        <div>
                            <CalendarOutlined /> {singleNews.createdAt}
                        </div>
                    </div>
                </div>
            </Card>
            <CommentsList />
        </>
    )
}

export default NewsPageDetails
