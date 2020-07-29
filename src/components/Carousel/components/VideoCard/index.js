import React, { useState } from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, style }) {
  //const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`
  const [prevs, setPrevs] = useState('');
  /* const prevs = [
    `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/1.jpg`,
    `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/2.jpg`,
    `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/3.jpg`,
    `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/4.jpg`,
    `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/5.jpg`
  ]; */
  const setPreviews = () => {
    setPrevs([
      `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/1.jpg`,
      `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/2.jpg`,
      `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/3.jpg`
    ])
  }

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={style}
      title={videoTitle}
      previews={prevs}
      onMouseEnter={setPreviews}
    />
  );
}

export default VideoCard;
