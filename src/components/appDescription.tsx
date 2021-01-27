import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 110%;

  font-feature-settings: 'case' on;
  color: ${({ theme }) => theme.primaryColor};
  margin-top: 0px;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.primaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  font-feature-settings: 'case' on;

  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

const AppDescriptionWrapper = styled.div`
  margin-top: 106px;
  margin-bottom: 43px;
`;

export const AppDescription: React.FC = () => (
  <AppDescriptionWrapper>
    <Title>The Person Finder</Title>
    <Description>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</Description>
  </AppDescriptionWrapper>
);
