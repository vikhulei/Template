import styled from "styled-components"
import { Container, Section } from "../../../../design/primitives/Primitives"
import { COLORS } from "../../../../design/tokens/Colors"

const TrustedByOuter = styled(Section)`

`

const TrustedByInner = styled(Container)`
    flex-direction: column;
    align-items: center;
`

const TrustedByTitle = styled.div`
    font-size: 0.7rem;
    font-weight: bold;
    color: ${COLORS.textMuted}
`

const LogoList = styled.div`
    display: flex;
    flex-direction: row;
    // background-color: green;
`

const LogoImage = styled.img`

`

export { TrustedByOuter, TrustedByInner, TrustedByTitle, LogoList, LogoImage }