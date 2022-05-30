import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));
  // input change eventHandler
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  // form submit eventHandler
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO: ERROR CATCH
      return;
    }
    dispatch(register({ username, password }));
  };

  // when component initial rendering, form clear
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // REGISTER SUCCESS/FAILURE
  useEffect(() => {
    if (authError) {
      console.log('ERROR');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('register SUCCESS');
      console.log(auth);
    }
  }, [auth, authError]);
  
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;