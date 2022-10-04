import styled, {css} from 'styled-components';

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
        margin-top: 9px;
    }

    h4 {
        font-size: 20px;
        font-weight: 400;
    }
`;

export const Button = styled.div`
    width: 142.719px;
    margin-top: 20px;

    > button {
        background-color: transparent;
        border: 1px solid #fff;
        
        padding: 15px 40px;
        position: relative;

        color: #fff;
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

        cursor: pointer;
    }

    > button:hover {
        color: #000;
    }

    > button:hover::before {
        bottom: 0%;
	    top: auto;
	    height: 100%;
    }

    > button::before {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 0px;
        width: 100%;
        z-index: -1;
        content: '';
        color: #000 !important;
        background: #fff;
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    }
`;
