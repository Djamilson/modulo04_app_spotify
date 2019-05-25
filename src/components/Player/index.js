import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

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
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>

        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        <button>
          <img src={PlayIcon} alt="Play" />
        </button>

        <button>
          <img src={PauseIcon} alt="Pause" />
        </button>

        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>

        <button>
          <img src={repeatIcon} alt="repeat" />
        </button>
      </Controls>
<Time>
  <span>1:39</span>
<ProgressSlider><Slider railsSyle= {{ background: '#404040', borderRadius: 10}}
 trackStyle={{ background: '#1ED760'}}
 handleStyle={{ border:0 }} /></ProgressSlider>
  <span>4:29</span>
</Time>

    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railsSyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ diplay: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
