import styled from "styled-components";
import {Section, Container} from "../../../design/primitives/Primitives"

const HeaderOuter = styled(Section)`
    background-color: black;
    height: 100px;
`
const HeaderInner = styled(Container)`
    background-color: red;
`

const LogoWrapper = styled.div`
    width: 200px;
`

const LogoImage = styled.img`

`

export {HeaderOuter, HeaderInner, LogoWrapper, LogoImage}