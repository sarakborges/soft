import styled from 'styled-components';

import Theme from 'theme';

export const ButtonStyle = styled.button`
  display: block;

  border: none;
  border-radius: 12px;
  background: ${Theme.dark};

  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;

  color: ${Theme.light};
  font-size: 18px;

  cursor: pointer;

  transition: color 0.3s, background 0.3s;

  &:hover {
    background: ${Theme.lightish};

    color: ${Theme.dark};
  }
`;
