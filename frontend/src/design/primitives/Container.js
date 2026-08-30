import styled from "styled-components";
import { SIZES } from "../tokens/Sizes";

const Container = styled.div`
  width: 100%;
  max-width: ${SIZES.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${SIZES.pagePadding.desktop};

  @media (max-width: ${SIZES.bp.mobile}) {
    padding: 0 ${SIZES.pagePadding.mobile};
  }
`;

export default Container;