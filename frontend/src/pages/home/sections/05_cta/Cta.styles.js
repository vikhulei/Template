import styled from "styled-components";

import { Section, Container, Stack, IconStack, ContentStack } from "../../../../design/primitives/Primitives";
import { SectionTitle, BodyText } from "../../../../design/textstyles/TextStyles";
import { SIZES } from "../../../../design/tokens/Sizes";
import { COLORS } from "../../../../design/tokens/Colors";

import yellowLines from "./images/waves.png";


const CTAOuter = styled(Section)`
    // background-color: #fff;
`;

const CTAInner = styled(Container)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    background-color: #221229;
    background-image: url(${yellowLines});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 40vw 10vh;

    border-radius: 16px;
    padding: 32px 60px;
    overflow: hidden;

    @media (max-width: ${SIZES.bp.tablet}) {
        padding: 32px;
        gap: 30px;
        // background-size: 30% auto;
    }

    @media (max-width: ${SIZES.bp.mobile}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        padding: 32px 24px;
        background-size: 100% 10vh;
    }
`;

const CTALeft = styled(IconStack)`
    flex: 1;
    min-width: 0;
    align-items: center;

    @media (max-width: ${SIZES.bp.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

const CTAIcon = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
    flex-shrink: 0;

    @media (max-width: ${SIZES.bp.mobile}) {
        width: 72px;
        height: 72px;
    }
`;

const CTATextStack = styled(ContentStack)`
    gap: 8px;
`;

const CTATitle = styled(SectionTitle)`
    color: #fff;
    margin-bottom: 0;

    @media (max-width: ${SIZES.bp.tablet}) {
        font-size: 28px;
    }

    @media (max-width: ${SIZES.bp.mobile}) {
        font-size: 26px;
    }
`;

const CTAHighlight = styled.span`
    color: ${COLORS.primary};
`;

const CTAText = styled(BodyText)`
    color: #fff;
    max-width: 520px;
`;

const CTARight = styled(Stack)`
    width: auto;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media (max-width: ${SIZES.bp.mobile}) {
        width: 100%;
    }
`;


export { CTAOuter, CTAInner, CTALeft, CTAIcon, CTATextStack, CTATitle, CTAHighlight, CTAText, CTARight };