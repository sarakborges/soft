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

  width: 500px;
  max-width: 100%;
  padding: 30px;
  margin: auto;

  border-radius: ${Theme.borderRadius};
`;

export const LoginTitle = styled.div`
  font-size: 24px;
  text-align: center;
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
  color: ${Theme.main};

  cursor: pointer;
`;
