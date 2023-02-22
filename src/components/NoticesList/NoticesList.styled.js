import styled from 'styled-components';

export const ListWrap = styled.div`
  padding: 30px 20px;

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    padding: 60px 32px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    padding: 60px 16px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
    max-width: 768px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    max-width: 1280px;
  }
`;
export const ListItem = styled.li`
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    margin: 16px;
  }
`;

export const LoaderWrap = styled.div`
  padding-top: 10px;
  width: 100%;

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 280px;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 728px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1240px;
  }
`;

export const InformationText = styled.p`
  padding: 10px 20px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeight.medium};
  line-height: 1.36;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.titleColor};

  @media screen and (min-width: ${p => p.theme.screenSizes.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 728px;
  }
  @media screen and (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1240px;
  }
`;
