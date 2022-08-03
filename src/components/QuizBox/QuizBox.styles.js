import styled from 'styled-components'

export const Wrapper = styled.div`
    background: white;
    width: 25%;
    margin: auto;
    padding: 2rem;
    border-radius: 1rem;

    h2{
        color: #2F527B;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 1024px){
        width: 40%;
    }

    @media (max-width: 320px){
        width: 70%;
        padding-top: 1rem;
    }

`