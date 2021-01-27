import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../models/index';
import { ProfileDetail } from './profileDetail';

type SearchListProps = {
  profiles?: Profile[];
}

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 43px;
`;

export const SearchList: React.FC<SearchListProps> = ({ profiles = [] }) => (
  <SearchWrapper>
    {profiles.map(profile => (
      <ProfileDetail profile={profile} key={`profile_${profile.id}`} />
    ))}
  </SearchWrapper>
)