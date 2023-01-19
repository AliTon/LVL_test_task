import { CommentsStyles } from './Comments.styles'
import { Avatar, Card, List } from 'antd'
import React from 'react'
import { IComment } from '../../modules/News/interfaces'
interface IProps {
    comments?: IComment[]
}
const CommentsList: React.FC<IProps> = ({ comments = [] }) => {
    return (
        <CommentsStyles>
            <h1>Comments...</h1>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <div style={{ margin: '20px 0' }}>
                                    <Avatar src={item.avatar} />
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
