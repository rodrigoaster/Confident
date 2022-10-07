import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 9px 10px 9px;
    
    background-color: #000;

    z-index: 999;
    position: fixed;
    width: 100%;
`


export const imgLogo = styled.div`
  @media (max-width: 995px) {
    display: flex;
    justify-content: center;
    flex: 1;
  }
`


export const NavLinks = styled.ul `
    display: flex;
    align-items: center;
    padding: 0px 30px;

    list-style-type: none;

    z-index: 999;

    > li {
        margin-right: 25px;

        text-transform: uppercase;

        cursor: pointer;

       > a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            font-weight: 600;  
            position: relative;

            ::after {
              
              content: " ";
              width: 0%;
              height: 1px;
              position: absolute;
              margin-top: 3px;


              background-color: #fff;
             
              bottom: 0;
              left: 0;

              transition: 0.2s ease-in-out ;
            }

            :hover {
              ::after {
              width: 100%;
            }
          }
        }

      @media (max-width: 995px) {
        display: none;
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

    z-index: 999;

    cursor: pointer;
`
