import styled from "styled-components";
import { COLORS } from "../tokens/Colors";


export const Eyebrow = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: ${COLORS.primary};
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
    font-size: 52px;
    font-weight: 700;
    line-height: 1.1;
`;

export const SectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 40px;
`;

export const ContentTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
`;

export const ContentText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
`;

export const BodyText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
`;

export const SmallText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`;

export const Caption = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
`;