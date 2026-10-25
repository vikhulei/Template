import styled from "styled-components";

import { Section, Container, Stack } from "../../../../design/primitives/Primitives";
import { Eyebrow, SectionTitle, ContentTitle, ContentText } from "../../../../design/textstyles/TextStyles";
import { SIZES } from "../../../../design/tokens/Sizes";


const CoursesOuter = styled(Section)`
    background-color: #fff;
`;

const CoursesInner = styled(Container)`
    flex-direction: column;
    align-items: center;
`;

const CoursesEyebrow = styled(Eyebrow)`
    text-align: center;
`;

const CoursesTitle = styled(SectionTitle)`
    text-align: center;
`;

const CoursesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    width: 100%;

    @media (max-width: ${SIZES.bp.tablet}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${SIZES.bp.mobile}) {
        grid-template-columns: 1fr;
    }
`;

const CourseCard = styled(Stack)`
    min-width: 0;
    padding: 32px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    align-items: flex-start;
    gap: 20px;
    @media(max-width: ${SIZES.bp.mobile}) {
        align-items: center;
    }
`;

const CourseIcon = styled.img`
    width: 52px;
    height: 52px;
    object-fit: contain;
    flex-shrink: 0;
`;

const CourseTitle = styled(ContentTitle)``;

const CourseText = styled(ContentText)``;

const CourseLink = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #7c3aed;

    &:hover {
        text-decoration: underline;
    }
`;


export { CoursesOuter, CoursesInner, CoursesEyebrow, CoursesTitle, CoursesGrid, CourseCard, CourseIcon, CourseTitle, CourseText, CourseLink };