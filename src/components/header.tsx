import { log } from 'console';
import React from 'react';
import styled from 'styled-components';

import LOGO from '../assets/logo.png';

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding-top: 20px;
  padding-left: 132px;
  
  border-top: 3px solid ${({ theme }) => theme.borderColor};
`;

const Logo = styled.img`
  width: 60px;
  height: 24px;
`;

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo src={LOGO} alt="logo" />
  </HeaderWrapper>
)