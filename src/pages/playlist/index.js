import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';


const Playlist = () => (
  <Container>
    <Header>
      <img src="https://avatars3.githubusercontent.com/u/10201661?v=4" alt="Playlist" />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Música</td>
          <td>Djamilson</td>
          <td>LJkjjdfj a</td>
          <td>3:32</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Música</td>
          <td>Djamilson</td>
          <td>LJkjjdfj a</td>
          <td>3:32</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Música</td>
          <td>Djamilson</td>
          <td>LJkjjdfj a</td>
          <td>3:32</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Música</td>
          <td>Djamilson</td>
          <td>LJkjjdfj a</td>
          <td>3:32</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Música</td>
          <td>Djamilson</td>
          <td>LJkjjdfj a</td>
          <td>3:32</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
