import { HeaderOuter, HeaderInner, LogoWrapper, LogoImage } from "./Header.styles"
import Nav from "./navigation/Nav"
import logo from "./logo.png"


const Header = () => {
  return (
    <HeaderOuter>
      <HeaderInner>
        <LogoWrapper to="#">
          <LogoImage src={logo} />
        </LogoWrapper>
        <Nav />
      </HeaderInner>
    </HeaderOuter>
  )
}

export default Header