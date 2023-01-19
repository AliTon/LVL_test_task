import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNews } from '../redux/selectors/newsSelector'
import { getNewsFeed } from '../redux/slices/newsSlice'
import { Card, List } from 'antd'
import { NewsPageStyle } from './NewsCard/NewsPage.styles'
import { Link } from 'react-router-dom'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'

const NewsPage = () => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const { Meta } = Card

    React.useEffect(() => {
        dispatch(getNewsFeed())
    }, [dispatch])

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 3,
                xxl: 4,
            }}
            dataSource={news}
            renderItem={(item) => (
                <List.Item>
                    <NewsPageStyle>
                        <Link to={`/news/${item.id}`}>
                            <Card
                                hoverable
                                style={{ width: 320 }}
                                cover={<img alt="img" src={item.image} />}
                            >
                                <Meta
                                    title={item.name}
                                    description={
                                        <div className="description">
                                            {item.text}
                                        </div>
                                    }
                                />
                                <div className="info">
                                    <div>
                                        <UserOutlined /> author: {item.author}
                                    </div>
                                    <div>
                                        <EyeOutlined /> {item.views}
                                    </div>
                                    <div>
                                        <CalendarOutlined /> {item.createdAt}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </NewsPageStyle>
                </List.Item>
            )}
        />
    )
}

export default NewsPage
