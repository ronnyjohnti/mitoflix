import React from 'react';
import TemplateSite from '../../../components/TemplateSite';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <>
      <TemplateSite>
        <form>
          <input placeholder="Título da categoria..." />
          <input placeholder="Um texto aqui" />
          <Link>Cadastrar categoria</Link>
        </form>
      </TemplateSite>
    </>
  )
}

export default CadastroCategoria;