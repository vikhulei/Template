import styled from "styled-components";
import { Container, Section } from "../../design/primitives/Primitives";

const HomeOuter = styled(Section)`
    height: 100vh;
    background-color: darkblue;
`

const HomeInner = styled(Container)`
    height: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
`

export { HomeOuter, HomeInner }