import styled from "styled-components"

import { Container, Section } from "../../../../design/primitives/Primitives"
import { Eyebrow, SectionTitle, BodyText } from "../../../../design/textstyles/TextStyles"
import { SIZES } from "../../../../design/tokens/Sizes"


const BenefitsOuter = styled(Section)`
    background-color: #fff;
`

const BenefitsInner = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    @media(max-width:${SIZES.bp.tablet}) {
        flex-direction: column;
        align-items: stretch;
        align-items: center;
    }
`

const BenefitsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media(max-width: ${SIZES.bp.tablet}) {
        width: 100%;
    }
`

const BenefitsEyebrow = styled(Eyebrow)`
    margin-bottom: 16px;
    @media(max-width: ${SIZES.bp.tablet}) {
        text-align: center;
    }
`

const BenefitsTitle = styled(SectionTitle)`
    margin-bottom: 40px;
    @media(max-width: ${SIZES.bp.tablet}) {
        text-align: center;
    }
`

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 40px;
    @media(max-width: ${SIZES.bp.mobile}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const BenefitItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 18px;
    @media(max-width: ${SIZES.bp.mobile}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const BenefitIcon = styled.img`
    width: 56px;
    height: 56px;
    object-fit: contain;
    flex-shrink: 0;
`

const BenefitContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`

const BenefitTitle = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

const BenefitText = styled(BodyText)`

`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    @media(max-width: ${SIZES.bp.tablet}) {
        width: 100%;
    }
    @media(max-width: ${SIZES.bp.mobile}) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 40px;
    @media(max-width: ${SIZES.bp.tablet}) {
        align-items: center;
    }

    &:nth-child(1),
    &:nth-child(2) {
        border-bottom: 1px solid #e5e7eb;
    }

    &:nth-child(2),
    &:nth-child(4) {
        border-left: 1px solid #e5e7eb;
    }
`

const StatIcon = styled.img`
    width: 52px;
    height: 52px;
    object-fit: contain;

    margin-bottom: 14px;
`

const StatNumber = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;

    margin-bottom: 12px;
`

const StatLabel = styled(BodyText)`

`


export { BenefitsOuter, BenefitsInner, BenefitsContent, BenefitsEyebrow, BenefitsTitle, BenefitsGrid, BenefitItem, BenefitIcon, BenefitContent, BenefitTitle, BenefitText, StatsGrid, StatItem, StatIcon, StatNumber, StatLabel }