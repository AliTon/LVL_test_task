import React from 'react'

import { Card } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../configureApp/hooks'
import { selectNewsById } from '../redux/selectors/newsSelector'
import { getNewsByIdAction } from '../redux/actions/newsActions'
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import CommentsList from '../../../components/Comments'
import { useParams } from 'react-router-dom'
import { ImgSkeleton, TextSkeleton } from './sketelons'
import { format } from 'date-fns'

const NewsPageDetails = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const singleNews = useAppSelector(selectNewsById(id as string))

    const loading = true

    const { Meta } = Card

    React.useEffect(() => {
        if (id) {
            dispatch(getNewsByIdAction(id))
        }
    }, [dispatch, id])

    //todo need to remove after integrating loading logic
    const date = '2023-01-17T08:00:27.576Z'
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
                    {loading ? (
                        <img
                            alt="img"
                            src={singleNews.image}
                            style={{ maxWidth: '600px', width: '100%' }}
                        />
                    ) : (
                        <ImgSkeleton />
                    )}
                </div>
                <div>
                    <Meta
                        title={
                            loading ? (
                                singleNews.name
                            ) : (
                                <TextSkeleton length={30} />
                            )
                        }
                        description={
                            <div style={{ marginBottom: '20px' }}>
                                {loading ? (
                                    singleNews.text
                                ) : (
                                    <TextSkeleton length={70} />
                                )}
                            </div>
                        }
                    />
                    <div className="info">
                        <div>
                            <UserOutlined /> author:{' '}
                            {loading ? (
                                singleNews.author
                            ) : (
                                <TextSkeleton length={20} />
                            )}
                        </div>
                        <div>
                            <EyeOutlined />{' '}
                            {loading ? (
                                singleNews.views
                            ) : (
                                <TextSkeleton length={5} />
                            )}
                        </div>
                        <div>
                            <CalendarOutlined />{' '}
                            {loading ? (
                                // singleNews.createdAt
                                format(new Date(date), 'yyyy-MM-dd  hh:mm a')
                            ) : (
                                <TextSkeleton length={20} />
                            )}
                        </div>
                    </div>
                </div>
            </Card>
            <CommentsList comments={singleNews.comments} />
        </>
    )
}

export default NewsPageDetails
