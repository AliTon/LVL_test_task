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
