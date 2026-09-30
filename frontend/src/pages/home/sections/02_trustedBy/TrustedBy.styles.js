import styled from "styled-components"
import { Container, Section } from "../../../../design/primitives/Primitives"
import { COLORS } from "../../../../design/tokens/Colors"

const TrustedByOuter = styled(Section)`

`

const TrustedByInner = styled(Container)`
    flex-direction: column;
    gap: 30px;
    align-items: center;
`

const TrustedByTitle = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${COLORS.textMuted}
`

const LogoList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    // background-color: green;
`

const LogoImage = styled.img`

`

export { TrustedByOuter, TrustedByInner, TrustedByTitle, LogoList, LogoImage }