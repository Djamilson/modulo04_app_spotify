import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="playlists/1">
        <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto voê programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto voê programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto voê programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto voê programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
