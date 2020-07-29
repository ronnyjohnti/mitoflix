import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  align-items: baseline;
  padding: 5px;
  margin-left:0;
  margin-top:0;
  margin-bottom: auto;

  color: var(--white);

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  background-color: var(--secondary);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 0;
  font-weight: 400;
`;

export const ExtraLink = styled(Link)`
  color: var(--blackLighter);
  margin-left: 15px;
  @media(max-width: 800px) {
    margin-top: 15px;
    margin-left: 0;
  }
`;