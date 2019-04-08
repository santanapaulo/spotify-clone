import React, { Fragment } from 'react';
import GlobalStyles from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header.js';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Fragment>
    <Wrapper>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
