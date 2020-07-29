import React, { useState } from 'react';
import VideoCard from '../VideoCard';
import './styles.css';
import SliderContainer, { SlideButton } from './styles';

function Slider({ videos }) {
  const [ x, setX ] = useState(0);

  const goLeft = () => {
    if(x === 0) {
      return;
    }
    setX(x + 318)
  }
  const goRight = () => {
    if(x <= -(318 * (videos.length - 4))) {
      return;
    }
    setX(x - 318)
  }

  return (
    <SliderContainer className={"overflow-0"}> 

      <SlideButton
        onClick={goLeft}
        style={{left: 0}}
        id={"left"}
      />

      {videos.map(video => {
        return(
          <VideoCard
            videoTitle={video.titulo}
            videoURL={video.url}
            style={{transform:`translateX(${x}px)`}}
          />
        );
      })}

      <SlideButton
        onClick={goRight}
        style={{right: 0}}
        id={"right"}
      />

    </SliderContainer>
  );
}

export default Slider;