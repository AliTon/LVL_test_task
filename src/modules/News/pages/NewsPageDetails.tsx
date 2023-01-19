import React from 'react'

import { Card, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNewsById } from '../redux/selectors/newsSelector'
import { getNewsByIdAction } from '../redux/actions/newsActions'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import CommentsList from '../../../components/Comments'
import { useParams } from 'react-router-dom'

const NewsPageDetails = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const singleNews = useAppSelector(selectNewsById(id as string))

    const { Meta } = Card

    React.useEffect(() => {
        if (id) {
            dispatch(getNewsByIdAction(id))
        }
    }, [dispatch, id])

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
            <CommentsList comments={singleNews.comments} />
        </>
    )
}

export default NewsPageDetails
