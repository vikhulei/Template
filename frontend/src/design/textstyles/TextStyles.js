import styled from "styled-components";
import { TYPOGRAPHY } from "../tokens/Typography";
import { COLORS } from "../tokens/Colors";

export const Eyebrow = styled.div`
  font-size: ${TYPOGRAPHY.size.xs};
  font-weight: ${TYPOGRAPHY.weight.bold};
  color: ${COLORS.primary};
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: ${TYPOGRAPHY.size.display};
  font-weight: ${TYPOGRAPHY.weight.bold};
  line-height: ${TYPOGRAPHY.line.tight};
`;

export const SectionTitle = styled.h2`
  font-size: ${TYPOGRAPHY.size.xxl};
  font-weight: ${TYPOGRAPHY.weight.bold};
  line-height: ${TYPOGRAPHY.line.tight};
`;

export const Subheading = styled.h3`
  font-size: ${TYPOGRAPHY.size.lg};
  font-weight: ${TYPOGRAPHY.weight.semibold};
  line-height: ${TYPOGRAPHY.line.tight};
`;

export const BodyText = styled.p`
  font-size: ${TYPOGRAPHY.size.md};
  font-weight: ${TYPOGRAPHY.weight.regular};
  line-height: ${TYPOGRAPHY.line.normal};
`;

export const SmallText = styled.p`
  font-size: ${TYPOGRAPHY.size.sm};
  font-weight: ${TYPOGRAPHY.weight.regular};
  line-height: ${TYPOGRAPHY.line.normal};
`;

export const Caption = styled.span`
  font-size: ${TYPOGRAPHY.size.xs};
  font-weight: ${TYPOGRAPHY.weight.regular};
  line-height: ${TYPOGRAPHY.line.normal};
`;