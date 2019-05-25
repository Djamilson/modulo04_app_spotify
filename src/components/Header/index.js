import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
    <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Avatar" />
      Djamilson Alves da Costa
    </User>
  </Container>
);

export default Header;
