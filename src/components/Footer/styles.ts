import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;

    display: flex;

    text-align: center;

    padding: 30px;

`

export const Texts = styled.div`
    display: flex;
    margin: auto;
    align-items: center;

    > span {
        color: #979797;

        margin-right: 25px;

        font-size: 13px;
    }

    > ul {
        display: flex;

        list-style-type: none;
        
        > li {
            margin-right: 25px;

            > a {
                color: #fff;

                text-transform: uppercase;

                text-decoration: none;
                
                font-size: 12px;
            }

            a:hover {
                color: #979797;
                transition: all ease 0.5s;
            }
        }
    }
`
