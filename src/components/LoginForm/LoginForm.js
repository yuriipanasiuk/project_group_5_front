import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';

import { ModalTitle } from 'components/ModalTitle/ModalTitle';
import { Button } from 'components/Button/Button';
import authOperations from '../../redux/auth/operations';
import { schema } from 'utils/loginValidationSchema';

import {
  Wraper,
  LinkText,
  NavLink,
  StyledButton,
  Form,
  Input,
  ButtonWraper,
  LinkWraper,
  ErrorMessage,
  ShowIcon,
  HideIcon,
  InputPasswordWraper,
  IconWraper,
  EmailWraper,
} from './LoginForm.styled';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (values === '') {
      return;
    }

    const { email, password } = values;
    dispatch(authOperations.login({ email, password }));

    resetForm();
  };

  const onShowPassword = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  return (
    <>
      <Wraper>
        <ModalTitle children="Login" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <EmailWraper>
              <Input type="email" name="email" placeholder="Email" />
              <ErrorMessage component="span" name="email" />
            </EmailWraper>

            <InputPasswordWraper>
              <Input
                type={inputType ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />
              <IconWraper>
                {showPassword ? (
                  <ShowIcon onClick={onShowPassword} />
                ) : (
                  <HideIcon onClick={onShowPassword} />
                )}
              </IconWraper>
              <ErrorMessage component="span" name="password" />
            </InputPasswordWraper>

            <ButtonWraper>
              <Button style={StyledButton} type="submit" children="Login" />
            </ButtonWraper>
            <LinkWraper>
              <LinkText>Don't have an account? </LinkText>
              <NavLink to="/registration-redirect">Register</NavLink>
            </LinkWraper>
          </Form>
        </Formik>
      </Wraper>
    </>
  );
};
