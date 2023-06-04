import styled from 'styled-components';

export const LogoText = styled.h1`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 28px;
  color: ${p => p.theme.colors.titleColor};
`;

export const LogoSpanLetter = styled.span`
  color: ${p => p.theme.colors.hoverGoHome};
`;
