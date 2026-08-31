import styled from "styled-components";
import styled from "styled-components";
import { SIZES } from "../tokens/Sizes";

const Section = styled.div`
    width: 100%;
    padding: 40px 0;
    @media (max-width: ${SIZES.bp.mobile}) {
        padding: 20px 0;
    }
`

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;

    @media (max-width: ${SIZES.bp.mobile}) {
        padding: 0 16px;
    }
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