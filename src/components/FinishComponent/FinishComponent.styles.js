import styled from 'styled-components'

export const Wrapper = styled.div`
    background: white;
    width: 25%;
    margin: auto;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2{
        color: #2F527B;
        margin-bottom: 1.5rem;
    }

    button{
        border: none;
        border-radius: .5rem;
        width: 100%;
        margin-left: auto;
        padding: .5rem .4rem;
        font-size: 1rem;
        font-weight: 700;
        background: #F9A826;
        color: white;

        :hover{
            background: #E69B22;
        }
    }
`