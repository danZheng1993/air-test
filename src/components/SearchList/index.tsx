import React from 'react';
import styled from 'styled-components';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
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

export const SearchList: React.FC<SearchListProps> = ({ profiles = [] }) => {
  const [renderCount, setRenderCount] = React.useState<number>(50);
  const handleBottom = React.useCallback(() => {
    setRenderCount(renderCount + 10);
  }, [renderCount, profiles.length]);

  useBottomScrollListener(handleBottom);
  return (
    <SearchWrapper>
      {profiles.slice(0, renderCount).map(profile => (
        <ProfileDetail profile={profile} key={`profile_${profile.id}`} />
      ))}
    </SearchWrapper>
  )
};
