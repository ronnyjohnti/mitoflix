import React from 'react';
import { CategoryGroupContainer } from './styles';
import MeuSlider from './components/Slider';
import HeaderCategory from './components/HeaderCategory';


function MeuCarousel({ category }) {
  const categoryTitle = category.titulo;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <CategoryGroupContainer>
      <HeaderCategory
        titulo={categoryTitle}
        link_extra={categoryExtraLink}
      />
      <MeuSlider
        videos={videos}
      />
    </CategoryGroupContainer>
  );
}

export default MeuCarousel;