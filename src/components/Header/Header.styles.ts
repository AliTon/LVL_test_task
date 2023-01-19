import styled from 'styled-components'

export const HeaderStyle = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    height: 100px;
    background: white;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    .title {
        margin: 5px;
        font-weight: bold;
        font-size: 32px;
    }
`
