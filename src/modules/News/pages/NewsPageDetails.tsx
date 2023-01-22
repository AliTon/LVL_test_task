import React, { useEffect } from 'react'

import { Card, Skeleton } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectLoading, selectNewsById } from '../redux/selectors/newsSelector'
import { getNewsByIdAction } from '../redux/actions/newsActions'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import CommentsList from '../../../components/Comments'
import { useParams } from 'react-router-dom'
import { ImgSkeleton } from './sketelons'
import { formatDateIfExists } from '../../../utils'
import { CardImageStyle } from '../styles/index.styled'

const NewsPageDetails = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const singleNews = useAppSelector(selectNewsById(id as string))

    const loading = useAppSelector(selectLoading)

    const { Meta } = Card

    useEffect(() => {
        if (id) {
            dispatch(getNewsByIdAction(id))
        }
    }, [dispatch, id])

    if (loading) {
        return (
            <>
                <ImgSkeleton />
                <Skeleton />
            </>
        )
    }

    return (
        <>
            <Card style={{ width: '100%' }}>
                <CardImageStyle>
                    <img alt="img" src={singleNews.image} />
                </CardImageStyle>
                <div>
                    <Meta
                        title={singleNews.name}
                        description={
                            <div style={{ marginBottom: '20px' }}>
                                {singleNews.text}
                            </div>
                        }
                    />
                    <div className="info">
                        <div>
                            <UserOutlined />
                            {`Author: ${singleNews.author}`}
                        </div>
                        <div>
                            <EyeOutlined />
                            {`Views: ${singleNews.views}`}
                        </div>
                        <div>
                            <CalendarOutlined />
                            {`CreatedAt: ${formatDateIfExists(
                                singleNews.createdAt
                            )}`}
                        </div>
                    </div>
                </div>
            </Card>
            <CommentsList comments={singleNews.comments} />
        </>
    )
}

export default NewsPageDetails
