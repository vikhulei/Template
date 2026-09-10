import styled from "styled-components";
import { Container, Section } from "../../../design/primitives/Primitives";

const FooterOuter = styled(Section)`
    background-color: black;
    height: 200px;
`

const FooterInner = styled(Container)`
    padding: 20px 10vw;
    flex-direction: column;
`

const FooterTop = styled.div`
    display: grid;
    margin: auto;
    width: 100%;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    align-items: start;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 200px;
`

const FooterHeader = styled.div`
    color: white;
    margin-bottom: 10px;
`

const FooterLink = styled.a`
    font-size: 0.7rem;
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
    color: white;
`

export { FooterOuter, FooterInner, FooterTop, FooterColumn, FooterHeader, FooterLink, SocialRow, FooterBottom }