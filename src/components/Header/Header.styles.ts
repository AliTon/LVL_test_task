import styled from 'styled-components'

export const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    background: white;
    z-index: 1;

    .title {
        margin: 5px;
        font-weight: bold;
        font-size: 32px;
    }
`
