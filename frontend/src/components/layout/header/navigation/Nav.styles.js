import styled from "styled-components";
import { Link } from "react-router-dom";
import { SIZES } from "../../../../design/tokens/Sizes";

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(10px, 3vw, 68px);
    @media(max-width: ${SIZES.bp.tablet}) {
        display: none;
    }
`

const MenuItem = styled.a`
    color: white;
`

const SignIn = styled(Link)`
    color: white;
`

const HamburgerButton = styled.button`
    display: none;
    font-size: 25px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    @media(max-width: ${SIZES.bp.tablet}) {
        display: block;
    }
`

export { NavWrapper, MenuItem, SignIn, HamburgerButton }