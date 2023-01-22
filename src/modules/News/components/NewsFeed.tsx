import React from 'react'
import { Card, List } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import { INews } from '../interfaces'
import { formatDateIfExists } from '../../../utils'
import { NewsPageStyle } from '../styles/index.styled'

interface IProps {
    news: INews[]
}
const NewsFeed: React.FC<IProps> = ({ news }) => {
    const { Meta } = Card

    return (
        <NewsPageStyle>
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
                        <div className="newsCard-item">
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
                                            {formatDateIfExists(item.createdAt)}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </List.Item>
                )}
            />
        </NewsPageStyle>
    )
}

export default NewsFeed
