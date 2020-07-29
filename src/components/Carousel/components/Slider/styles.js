import styled from 'styled-components';

const Slider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: scroll;

  height: var(--sliderHeight);
`;

export const SlideButton = styled.button`
  position: absolute;
  z-index: 550;
  opacity: 0;
  background: none;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  margin-left: 5%;
  width: 5%;
  height: var(--sliderHeight);
  outline: none;

  &:hover {
    opacity: 1;
  }

  @media(max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export default Slider;