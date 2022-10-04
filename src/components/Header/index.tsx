import * as S from './styles';

import Logo from '../../assets/logo2.png'

export default function Header() {
  return (
    <S.Container>
      <img src={Logo} width={"90px"} height={"60px"}/>
      <S.NavLinks>
        <li>
          <a href="www.google.com">Falcon 9</a>
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
  );
}
