import styled from 'styled-components'

export const Wrapper = styled.button`
    border: 2px solid #4348B3B2;
    border-radius: 1rem;
    padding: 0rem 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    background: ${(props) => props.className === 'correct' ? '#60BF88' : props.className === 'incorrect' ? '#EA8282' : 'white'};
    border-color: ${(props) => props.className === 'correct' ? '#60BF88' : props.className === 'incorrect' ? '#EA8282' : ''};
    gap: .5rem;
    color: ${(props) => props.className ? 'white' : '#6066D0CC'};

    *{
        border: none;
    }

    :hover{
        background: #F9A826;
        border: 2px solid #F9A826;
        
        p{
            color: white;
        }
    }
`