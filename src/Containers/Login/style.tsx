import styled from 'styled-components';

import Theme from 'theme';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 500px;
  padding: 30px;
  margin: auto;

  border-radius: 12px;
  background: ${Theme.light};
`;

export const FieldItem = styled.div`
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

export const PasswordField = styled.div`
  position: relative;

  input {
    padding-right: 45px;
  }
`;

export const TogglePassword = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  font-size: 20px;
  color: ${Theme.dark};

  cursor: pointer;
`;
