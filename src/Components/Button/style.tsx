import styled from 'styled-components';

import Theme from 'theme';

interface Props {
  inverted: boolean;
  fullWidth: boolean;
}
export const ButtonStyle = styled.button<Props>`
  display: block;

  border: none;
  border-radius: 12px;
  background: ${props => (props.inverted ? Theme.light : Theme.dark)};

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  height: 50px;
  padding: 0 30px;
  margin: 0;

  color: ${props => (props.inverted ? Theme.dark : Theme.light)};
  font-size: 18px;

  cursor: pointer;

  transition: color 0.3s, background 0.3s;

  &:hover {
    background: ${Theme.lightish};

    color: ${Theme.dark};
  }
`;
