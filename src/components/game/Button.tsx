import styled from 'styled-components'

export const StyledButton = styled.article<{
  $hex: string
  $i: number
  $active: boolean
}>`
  width: 50%;
  height: 50%;
  position: absolute;
  border: 2px solid #222;
  transform-origin: 100% 100%;
  background-color: ${props => props.$hex};
  transform: rotate(${props => props.$i * 90}deg);
  filter: brightness(${props => (props.$active ? 2.5 : 1)});

  &:active {
    filter: brightness(250%);
  }
`

export const StartButton = styled.button`
  border: 5px solid #222;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: red;
  cursor: pointer;

  &:active {
    outline: 0;
    transform: scale(0.95);
  }
`
