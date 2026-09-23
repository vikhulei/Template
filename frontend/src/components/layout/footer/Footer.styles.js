import styled from "styled-components";
import { Container, Section } from "../../../design/primitives/Primitives";
import { SIZES } from "../../../design/tokens/Sizes";
import { COLORS } from "../../../design/tokens/Colors"

const FooterOuter = styled(Section)`
    background-color: ${COLORS.black};
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
    gap: 30px;
    @media(max-width: ${SIZES.bp.tablet}) {
        grid-template-columns: repeat(2, auto);
        padding: 0 100px;
    }
    @media(max-width: ${SIZES.bp.mobile}) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
`

const FooterHeader = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
`

const FooterLink = styled.a`
    font-size: 0.75rem;
    color: white;
    line-height: 1.3;
    margin-bottom: 4px;
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
    gap: 50px;
    @media(max-width: ${SIZES.bp.mobile}) {
        max-width: 400px;
        gap: 10px;
        justify-content: center;
    }
`

const FooterBottomText = styled.div`
    color: white;
    font-size: 0.9rem;
    line-height: 1.5;
`

export { FooterOuter, FooterInner, FooterTop, FooterColumn, FooterHeader, FooterLink, SocialRow, FooterBottom, FooterBottomText }