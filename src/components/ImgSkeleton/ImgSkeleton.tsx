import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const ImgSkeletonStyles = styled.div`
    max-width: 600px;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgSkeleton = () => {
    return (
        <ImgSkeletonStyles>
            <Spin size="large" />
        </ImgSkeletonStyles>
    )
}
