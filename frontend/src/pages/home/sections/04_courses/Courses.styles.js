import styled from "styled-components"

import { Container, Section } from "../../../../design/primitives/Primitives"
import { Eyebrow, SectionTitle, BodyText, Caption, Subheading } from "../../../../design/textstyles/TextStyles"


const CoursesOuter = styled(Section)`

`

const CoursesInner = styled(Container)`
    flex-direction: column;
`
const CoursesEyebrow = styled(Eyebrow)`

`

const CoursesTitle = styled(SectionTitle)`

`

const CoursesGrid = styled.div`
    display: flex;
`

const CourseCard = styled.div`

`

const CourseIcon = styled.img`

`

const CourseTitle = styled(Subheading)`

`

const CourseText = styled(BodyText)`

`

const CourseLink = styled.a`

`


export { CoursesOuter, CoursesInner, CoursesEyebrow, CoursesTitle, CoursesGrid, CourseCard, CourseIcon, CourseTitle, CourseText, CourseLink }