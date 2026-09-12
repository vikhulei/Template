import styled from "styled-components";
import { Container, Section } from "../../../design/primitives/Primitives";
import { SIZES } from "../../../design/tokens/Sizes";

const FooterOuter = styled(Section)`
    background-color: black;
`

const FooterInner = styled(Container)`
    padding: 20px 0;
    flex-direction: column;
    gap: 20px;
    height: auto;
`


const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 200px;
    @media(max-width: ${SIZES.bp.mobile}){
        align-items: center;
    }
`


const FooterTop = styled.div`
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    align-items: start;
    gap: 100px;
    @media(max-width: ${SIZES.bp.tablet}) {
        grid-template-columns: repeat(2, auto);
    }
    @media(max-width: ${SIZES.bp.mobile}) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }

`


const FooterHeader = styled.div`
    font-size: 1.2rem;
    color: white;
    margin-bottom: 10px;
`

const FooterLink = styled.a`
    font-size: 0.85rem;
    color: white;
    line-height: 1.5;
`

const SocialRow = styled.div`
    color: white;
    display: flex;
    gap: 20px;
    padding-top: 10px;
`

const FooterBottom = styled.div`
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid gray;
    flex-wrap: wrap;
`

const FooterBottomText = styled.div`
    color: white;
    font-size: 0.9rem;
`

export { FooterOuter, FooterInner, FooterTop, FooterColumn, FooterHeader, FooterLink, SocialRow, FooterBottom, FooterBottomText }