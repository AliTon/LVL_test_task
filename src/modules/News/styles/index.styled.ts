import styled from 'styled-components'

export const NewsPageStyle = styled.div`
    margin-top: 100px;
    .newsCard-item {
        display: flex;
        justify-content: center;
        .description {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            height: 70px;
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
    }
`

export const MainPageStyle = styled.div`
    display: flex;
    justify-content: center;
`

export const SortingSectionStyle = styled.div`
    background: gainsboro;
    position: fixed;
    height: 80px;
    width: 100%;
    z-index: 1;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .sorting {
        display: block;
        .selectLabel {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 4px;
        }
        .select {
            margin-top: 4px;
            text-align: center;
            display: flex;
        }
    }
`

export const CardImageStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    img {
        max-width: 600px;
        width: 100%;
    }
`

export const ImgSkeletonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
