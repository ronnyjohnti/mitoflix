import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import dadosIniciais from '../../dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <>
      <Menu />

        <BannerMain
          videoTitle = { dadosIniciais.categorias[0].videos[0].titulo }
          url = { dadosIniciais.categorias[0].videos[0].url }
          videoDescription = {"Como se originaram os deuses da Mitologia Grega? Apresento a vocês a série Mitologuia do canal Guilherme Analisa. Sempre com muito bom humor e ótimas histórias, você vai adorar. Confira agora o primeiro vídeo dessa série incrível!"}
        />

        <Carousel 
          ignoreFirstVideo
          category = { dadosIniciais.categorias[0] }
        />

        <Carousel 
          ignoreFirstVideo
          category = { dadosIniciais.categorias[1] }
        />

      <Footer />
    </>
  );
}

export default Home;
