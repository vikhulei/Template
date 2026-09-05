import styled from "styled-components";
import {Section, Container} from "../../../design/primitives/Primitives"
import { Link } from "react-router-dom";

const HeaderOuter = styled(Section)`
    background-color: black;
    height: 100px;
`
const HeaderInner = styled(Container)`
    
`

const LogoWrapper = styled(Link)`
    width: 200px;
`

const LogoImage = styled.img`

`

export {HeaderOuter, HeaderInner, LogoWrapper, LogoImage}