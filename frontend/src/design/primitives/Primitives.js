import styled from "styled-components";
import { SIZES } from "../tokens/Sizes";

const Section = styled.div`
    width: 100%;
    padding: 0 20px;
`

const Container = styled.div`
    width: 100%;
    height:100%;
    max-width: 1400px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Stack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({$direction}) => $direction || "column"};
    gap: ${({$gap}) => $gap || "0"};
    align-items: ${({$align}) => $align || "stretch"};
    justify-content: ${({$justify}) => $justify || "flex-start"};
`

export {Section, Container, Stack};