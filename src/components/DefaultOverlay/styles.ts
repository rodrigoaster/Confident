import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 60%;
    left: 12%;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;

    color: #fff;

    h2 {
        font-size: 43px;
        font-family: 'Ropa Sans';
    }

    h4 {
        font-size: 20px;
        font-family: 'Ropa Sans';
        font-weight: 400;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    
    padding: 15px 35px;
    margin-top: 25px;

    color: #fff;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;

    cursor: pointer;

    
`;
