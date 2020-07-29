import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid var(--secondary);
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: 1s;
  &:hover,
  &:focus {
    z-index: 50;
    flex: 0 0 360px;
    width: 360px;
    height: 240px;
    animation: Preview 7s 5s ease infinite;
    box-shadow: 0 0 5px var(--white);
    border-color: var(--primary);
  }
  
  &:not(:first-child) {
    margin-right: 20px;
  }

  & {
    @keyframes Preview {
      0% {
        background-image: ${({ previews }) => `url(${previews[0]})`};
      }
      17% {
        background-image: ${({ previews }) => `url(${previews[0]})`};
      }
      33% {
        background-image: ${({ previews }) => `url(${previews[0]})`};
      }
      50% {
        background-image: ${({ previews }) => `url(${previews[1]})`};
      }
      67% {
        background-image: ${({ previews }) => `url(${previews[1]})`};
      }
      84% {
        background-image: ${({ previews }) => `url(${previews[2]})`};
      }
      100% {
        background-image: ${({ previews }) => `url(${previews[2]})`};
      }
    }
  }
`;
