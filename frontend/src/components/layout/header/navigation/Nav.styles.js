import styled from "styled-components";
import { Link } from "react-router-dom";
import { SIZES } from "../../../../design/tokens/Sizes";

const DektopMenu = styled.nav`
    display: ${({ $hambMenu }) => $hambMenu ? "flex" : "none"};
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
const MobileMenu = styled.div`
    position: absolute;
    width: 220px;
    top: 100px;
    right: 0;
    display: ${({ hambMenu }) => hambMenu ? "flex" : "none"};
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background-color: black;
`

export { DektopMenu, MenuItem, SignIn, HamburgerButton, MobileMenu }