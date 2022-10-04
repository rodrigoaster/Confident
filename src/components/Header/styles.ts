import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 9px 10px 9px;
    
    background-color: #000;

    z-index: 999;
`;

export const NavLinks = styled.ul `
    display: flex;
    align-items: center;
    padding: 0px 30px;

    list-style-type: none;

    > li {
        margin-right: 25px;

        text-transform: uppercase;

        cursor: pointer;

       > a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
        }
    }
`

export const MenuMobile = styled.div`
    > div {
        width: 15px;
        height: 2px;

        background-color: #fff;        
    }

    > div + div {
        margin-top: 1px;
    }




`
