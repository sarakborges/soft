// Dependencies
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';

// Constants
import ROUTES from 'consts';

// Context
import { AppContext } from 'Contexts/app';

// APIS
import UserAPI from 'Apis/user';

// Components
import Field from 'Components/Field';
import Button from 'Components/Button';

// Styles
import {
  FormWrapper,
  Form,
  FieldItem,
  PasswordField,
  TogglePassword,
} from './style';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Container Login
const Login = () => {
  // Attributes
  const { state, dispatch } = useContext(AppContext);
  const [loginData, setLoginData] = useState<{
    user: string;
    pass: string;
    showPass: boolean;
  }>({
    user: '',
    pass: '',
    showPass: false,
  });

  // Functions
  const doLogin = async (user: string, pass: string) => {
    if (!!user && !!pass) {
      const loginInfo = await UserAPI.getLogin(user, pass);

      if (!!loginInfo) {
        dispatch({
          type: 'DO_LOGIN',
          data: {
            isAuthed: true,
            token: loginInfo.token,
          },
        });
      }
    }
  };

  // DOM
  return (
    <>
      {state.isAuthed && <Redirect to={ROUTES.HOME.url} />}

      {!state.isAuthed && (
        <FormWrapper>
          <Form
            onSubmit={e => {
              e.preventDefault();
              doLogin(loginData.user, loginData.pass);
            }}
          >
            <FieldItem>
              <Field
                label={faUser}
                name="user"
                placeholder="Digite seu usuário aqui"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.persist();

                  setLoginData(prevState => {
                    return {
                      ...prevState,
                      user: e.target.value,
                    };
                  });
                }}
              />
            </FieldItem>

            <FieldItem>
              <PasswordField>
                {!loginData.showPass && (
                  <Field
                    label={faLock}
                    name="pass"
                    type="password"
                    placeholder="Digite sua senha aqui"
                    value={loginData.pass}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.persist();

                      setLoginData(prevState => {
                        return {
                          ...prevState,
                          pass: e.target.value,
                        };
                      });
                    }}
                  />
                )}

                {!!loginData.showPass && (
                  <Field
                    label={faLock}
                    name="pass"
                    placeholder="Digite sua senha aqui"
                    value={loginData.pass}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.persist();

                      setLoginData(prevState => {
                        return {
                          ...prevState,
                          pass: e.target.value,
                        };
                      });
                    }}
                  />
                )}

                <TogglePassword>
                  <FontAwesomeIcon
                    icon={!!loginData.showPass ? faEyeSlash : faEye}
                    onClick={() => {
                      setLoginData(prevState => {
                        return {
                          ...prevState,
                          showPass: !prevState.showPass,
                        };
                      });
                    }}
                  />
                </TogglePassword>
              </PasswordField>
            </FieldItem>

            <FieldItem>
              <Button type="submit">Login</Button>
            </FieldItem>
          </Form>
        </FormWrapper>
      )}
    </>
  );
};

export default Login;
