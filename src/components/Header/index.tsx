import * as S from './styles';

import Logo from '../../assets/Logob.png'

export default function Header() {  
  return (

    <S.ContainerAnim>
      <S.Container>
        <img src={Logo} width={"130px"} height={"100px"}/>
        <S.NavLinks>
          <li>
            <a href="#">Falcon 9</a>
          </li>
          <li>
            <a href="#">Falcon Heavy</a>
          </li>
          <li>
            <a href="#">Dragon</a>
          </li>
          <li>
            <a href="#">Starship</a>
          </li>
          <li>
            <a href="#">Human Spaceflight</a>
          </li>
          <li>
            <a href="#">Rideshare</a>
          </li>
          <li>
            <a href="#">Starlink</a>
          </li>
        </S.NavLinks>
        <S.NavLinks>
          <li><a href="#">SHOP</a></li>
          <S.MenuMobile>
            <div></div>
            <div></div>
            <div></div>
          </S.MenuMobile>
        </S.NavLinks>
      </S.Container>
    </S.ContainerAnim>
  );
}
