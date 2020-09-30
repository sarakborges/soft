import styled from 'styled-components';

import Theme from 'theme';

interface Props {
  inverted: boolean;
  fullWidth: boolean;
}
export const ButtonStyle = styled.button<Props>`
  display: block;

  border: 2px solid ${Theme.main};
  border-radius: ${Theme.borderRadius};
  background: ${props => (props.inverted ? Theme.light : Theme.main)};

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  height: 50px;
  padding: 0 30px;
  margin: 0;

  color: ${props => (props.inverted ? Theme.main : Theme.light)};
  font-size: 18px;

  cursor: pointer;

  transition: color 0.3s, background 0.3s;

  &:hover {
    background: ${props => (props.inverted ? Theme.main : Theme.light)};

    color: ${props => (props.inverted ? Theme.light : Theme.main)};
  }
`;
