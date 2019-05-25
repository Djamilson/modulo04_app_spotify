import React from 'react';
import { Container, Current } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
        alt="Cover"
      />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters </small>
      </div>
    </Current>
    <Volume>
      <img src="{VolumeIcon}" alt="Volume" />
    </Volume>
  </Container>
);

export default Player;
