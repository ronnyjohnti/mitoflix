import React from 'react';
import { ContainerHeader, Title, ExtraLink } from './styles';

export default function HeaderCategory({ titulo, link_extra }) {
  return (
    <ContainerHeader>
      <Title>
        {titulo}
      </Title>
      <ExtraLink to={link_extra.url}>
        {link_extra.text}
      </ExtraLink>
    </ContainerHeader>
  );
}