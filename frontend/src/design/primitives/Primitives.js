import styled from "styled-components";
import { SIZES } from "../tokens/Sizes";

export const Section = styled.div`
    width: 100%;
    padding: 0 50px;
`

export const Container = styled.div`
    width: 100%;
    height:100%;
    max-width: 1400px;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Stack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`

export const IconStack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 18px;
    @media(max-width: ${SIZES.bp.mobile}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const ContentStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
