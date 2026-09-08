import styled from "styled-components";
import { Container, Section } from "../../../design/primitives/Primitives";

const FooterOuter = styled(Section)`
    background-color: black;
    height: 200px;
`

const FooterInner = styled(Container)`
    display: grid;
    grid-template-column: repeat(5, 1fr);
    gap: 40px;
`

const FooterColumn = styled.div`

`

const FooterHeader = styled.div`

`

const FooterLink = styled.a`

`

const SocialRow = styled.div`

`

const ContactItem = styled.div`

`

export { FooterOuter, FooterInner, FooterColumn, FooterHeader, FooterLink, SocialRow, ContactItem }