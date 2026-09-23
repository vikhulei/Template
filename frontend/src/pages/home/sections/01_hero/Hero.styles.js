import styled from "styled-components";
import { Container, Section } from "../../../../design/primitives/Primitives";
import { COLORS } from "../../../../design/tokens/Colors";


const HeroOuter = styled(Section)`
    background-color: ${COLORS.black};
    color: white;
`

const HeroInner = styled(Container)`

`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
`

const Eyebrow = styled.div`
    color: ${COLORS.primary};
    font-weight: bold;
    font-size: 0.8rem;
`

const HeroTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`
const HeroTitleHighlight = styled.span`
    font-size: 2.5rem;
    font-weight: bold; 
    color: ${COLORS.primary};
`

const HeroDescription = styled.div`
    font-size: 0.9rem;
    line-height: 2;
`

const HeroActions = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const ActionsIcon = styled.img`
    height: 50px;
`

const ActionsText = styled.div`
    font-size: 0.85rem;
`

const SocialProof = styled.img`
    object-fit: contain;
    height: 40px;
    align-self: flex-start;
`

const HeroVisual = styled.div`

`

const HeroImage = styled.img`

`

const CourseProgress = styled.img`

`

export { HeroOuter, HeroInner, HeroContent, Eyebrow, HeroTitle, HeroTitleHighlight, HeroDescription, HeroActions, ActionsIcon, ActionsText, SocialProof, HeroVisual, HeroImage, CourseProgress }