import styled from "styled-components";
import { Container, Section } from "../../../design/primitives/Primitives";

const FooterOuter = styled(Section)`
    background-color: black;
    height: 200px;
`

const FooterInner = styled(Container)`
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: space-between;
    align-items: start;
    padding: 40px;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const FooterHeader = styled.div`
    color: white;
`

const FooterLink = styled.a`
    color: white;
`

const SocialRow = styled.div`

`

const ContactItem = styled.div`

`

export { FooterOuter, FooterInner, FooterColumn, FooterHeader, FooterLink, SocialRow, ContactItem }