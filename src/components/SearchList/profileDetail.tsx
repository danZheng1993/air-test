import React from 'react';
import styled from 'styled-components';

import { Profile } from '../../models/index';

type ProfileDetailProps = {
  profile: Profile;
}

const AvatarImage = styled.img`
  width: 96px;
  height: 96px;
  background: ${({ theme }) => theme.placeholderBgColor}
`;

const ProfileName = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.primaryFont};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.025em;
  font-feature-settings: 'case' on;
  color: ${({ theme }) => theme.primaryTextColor};
`;

const ProfileDescription = styled.p`
  font-family: ${({ theme }) => theme.primaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;

  color: ${({ theme }) => theme.secondaryTextColor};
`;

const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 24px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile }) => (
  <ProfileWrapper>
    <AvatarImage src={profile.avatar} alt={`profile_${profile.id}`} />
    <ProfileContent>
      <ProfileName>{profile.name}</ProfileName>
      <ProfileDescription>{profile.description}</ProfileDescription>
    </ProfileContent>
  </ProfileWrapper>
);
