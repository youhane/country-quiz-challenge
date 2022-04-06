import styled from 'styled-components'

export const Wrapper = styled.button`
    border: 2px solid #6066D0B2;
    border-radius: 1rem;
    padding: 0rem 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 100%;

    *{
        border: none;
        color: #6066D0CC;
    }

    :hover, :hover > *{
        background: #F9A826;
        color: white;
    }

    :hover{
        border: 2px solid #F9A826;
    }
`