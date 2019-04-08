import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/15819810?s=400&u=b6b0897b92ccdd88084b5ba90641224c3cecb5f7&v=4"
        alt="Avatar"
      />
    </User>
  </Container>
);

export default Header;
