import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNews } from '../redux/selectors/newsSelector'
import { getNewsFeedAction } from '../redux/actions/newsActions'
import { Card, List, Select } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const NewsPageStyle = styled.div`
    display: flex;
    justify-content: center;
    .description {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 8px;
    }
    a:link {
        text-decoration: none;
    }
`

const NewsPage = () => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const { Meta } = Card

    React.useEffect(() => {
        dispatch(getNewsFeedAction())
    }, [dispatch])

    const handleSelectChanged = (value: string) => {
        dispatch(getNewsFeedAction(value))
    }

    return (
        <>
            <Select
                options={[
                    {
                        label: 'Date',
                        value: 'createdAt',
                    },
                    {
                        label: 'Views',
                        value: 'views',
                    },
                ]}
                onChange={handleSelectChanged}
            />
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
                                            <UserOutlined /> author:{' '}
                                            {item.author}
                                        </div>
                                        <div>
                                            <EyeOutlined /> {item.views}
                                        </div>
                                        <div>
                                            <CalendarOutlined />{' '}
                                            {item.createdAt}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </NewsPageStyle>
                    </List.Item>
                )}
            />
        </>
    )
}

export default NewsPage
