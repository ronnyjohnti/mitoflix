import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Menu/>

      <BannerMain
        videoTitle = { dadosIniciais.categorias[0].videos[0].titulo }
        url = { dadosIniciais.categorias[0].videos[0].url }
        videoDescription = {"Como se originaram os deuses da Mitologia Grega? Apresento a vocês a série Mitologuia do canal Guilherme Analisa. Sempre com muito bom humor e ótimas histórias, você vai adorar. Confira agora o primeiro vídeo dessa série incrível!"}
      />

      <Carrousel 
        ignoreFirstVideo
        category = { dadosIniciais.categorias[0] }
      />

      <Carrousel 
        ignoreFirstVideo
        category = { dadosIniciais.categorias[1] }
      />

      <Footer/>
    </div>
  );
}

export default App;
