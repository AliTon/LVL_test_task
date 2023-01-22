import { Avatar, List } from 'antd'
import React from 'react'
import { IComment } from '../../modules/News'
interface IProps {
    comments?: IComment[]
}
const CommentsList: React.FC<IProps> = ({ comments = [] }) => {
    return (
        <>
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
        </>
    )
}

export default CommentsList
