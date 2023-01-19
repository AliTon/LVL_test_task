import { CommentsStyles } from './Comments.styles'
import { Avatar, Card, List } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../configureApp/hooks'
import { selectNews } from '../../modules/News/redux/selectors/newsSelector'
import { getNewsFeed } from '../../modules/News/redux/slices/newsSlice'

const CommentsList = () => {
    const news = useAppSelector(selectNews)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getNewsFeed())
    }, [dispatch])

    return (
        <CommentsStyles>
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
        </CommentsStyles>
    )
}

export default CommentsList
