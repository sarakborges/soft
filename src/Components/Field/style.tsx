import styled from 'styled-components';

import Theme from 'theme';

export const FieldWrapper = styled.div`
  display: flex;

  width: 100%;
  overflow: hidden;

  border-radius: ${Theme.borderRadius};
`;

export const FieldStyle = styled.input`
  flex: 1;
  max-width: calc(100% - 50px);
  height: 50px;
  padding: 0 15px;

  font-size: 18px;
  color: ${Theme.main};

  border: 2px solid transparent;
  border-left: none;
  border-radius: 0 ${Theme.borderRadius} ${Theme.borderRadius} 0;
  background: ${Theme.light};

  transition: border-color 0.3s;

  &:focus {
    border-color: ${Theme.main};
  }

  @media (max-width: 500px) {
    height: 40px;
    max-width: calc(100% - 40px);
    padding: 0 12px;

    font-size: 16px;
  }
`;

export const FieldTextAreaStyle = styled.textarea`
  flex: 1;
  min-height: 150px;
  max-height: 400px;
  padding: 10px 15px;

  font-size: 18px;
  color: ${Theme.main};

  border: 2px solid transparent;
  border-radius: ${Theme.borderRadius};
  background: ${Theme.light};

  transition: border-color 0.3s;

  &:focus {
    border-color: ${Theme.main};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;

  font-size: 20px;
  color: ${Theme.light};

  background: ${Theme.main};

  @media (max-width: 500px) {
    width: 40px;

    font-size: 16px;
  }
`;
