import styled from "styled-components";
import { COLORS } from "../../../design/tokens/Colors"

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background-color: ${COLORS.primary};
    font-size: 0.7rem;
    font-weight: bold;
`

export { Button }