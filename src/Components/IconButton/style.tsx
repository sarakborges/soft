import styled from 'styled-components';

import Theme from 'theme';

export const IconButtonStyle = styled.button`
  display: block;

  border: none;
  border-radius: ${Theme.borderRadius};
  background: transparent;

  width: auto;
  padding: 5px 10px;
  margin: 0;

  color: ${Theme.dark};
  font-size: 16px;

  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: ${Theme.lightgray};
  }

  &:disabled {
    color: ${Theme.lightgray};
    background: transparent;

    cursor: default;
  }

  @media (max-width: 460px) {
    font-size: 13px;
  }
`;

export const IconButtonText = styled.span`
  padding-left: 10px;

  @media (max-width: 460px) {
    padding-left: 7px;
  }
`;
