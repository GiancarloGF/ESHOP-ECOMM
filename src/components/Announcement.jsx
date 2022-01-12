import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    background-color: var(--bgc-announcement);
    color: var(--c-white);
    display: flex;
    height: 30px;
    justify-content: center;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on all orders over $50
        </Container>
    )
}

export default Announcement
