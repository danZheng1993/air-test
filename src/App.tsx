import React from 'react';
import { ThemeProvider } from 'styled-components';

import THEME from './theme';
import { Profile } from './models/index';

import {
  AppDescription,
  Container,
  ContentContainer,
  Header,
  Input,
  SearchList,
} from './components';

function App() {
  const [data, setData] = React.useState<Profile[]>([]);
  const [searchKey, setSearchKey] = React.useState<string>('');

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch('/data.json').then(res => res.json());
    setData(result);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }

  const renderingData = React.useMemo(() => {
    if (searchKey !== '') {
      return data.filter(data => data.name.includes(searchKey));
    }
    return data;
  }, [data, searchKey]);

  return (
    <ThemeProvider theme={THEME}>
      <Container>
        <Header />
        <ContentContainer>
          <AppDescription />
          <Input placeholder="Type a name..." value={searchKey} onChange={handleChange} data-testid="search_input" />
          <SearchList profiles={renderingData} />
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
