import { HeaderOuter, HeaderInner, LogoWrapper, LogoImage } from "./Header.styles"
import logo from "./logo.jpg"

const Header = () => {
  return (
    <HeaderOuter>
      <HeaderInner>
        <LogoWrapper>
          <LogoImage src={logo} />
        </LogoWrapper>
        <div>

        </div>
      </HeaderInner>
    </HeaderOuter>
  )
}

export default Header