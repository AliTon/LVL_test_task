import React from 'react'

import { Avatar, Card, List } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNews } from '../redux/selectors/newsSelector'
import { getNewsFeed } from '../redux/slices/newsSlice'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'

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
                    <img alt="img" src={singleNews.image} width="100%" />
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
            <h1>Comments...</h1>
            <List
                itemLayout="horizontal"
                dataSource={news}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <div style={{ margin: '20px 0' }}>
                                    <Avatar src={item.image} />
                                </div>
                            }
                            title={item.author}
                            description={item.text}
                        />
                    </List.Item>
                )}
                style={{
                    width: '100%',
                }}
            />
        </>
    )
}

export default NewsPageDetails
