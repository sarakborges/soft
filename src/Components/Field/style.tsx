import styled from 'styled-components';

import Theme from 'theme';

export const FieldWrapper = styled.div`
  display: flex;

  width: 100%;
  overflow: hidden;

  border-radius: 12px;
`;

export const FieldStyle = styled.input`
  flex: 1;
  max-width: calc(100% - 50px);
  height: 50px;
  padding: 0 15px;

  font-size: 18px;

  border: 2px solid transparent;
  border-left: none;
  border-radius: 0 12px 12px 0;
  background: ${Theme.lightish};

  transition: border-color 0.3s;

  &:focus {
    border-color: ${Theme.dark};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;

  font-size: 20px;
  color: ${Theme.light};

  background: ${Theme.dark};
`;
