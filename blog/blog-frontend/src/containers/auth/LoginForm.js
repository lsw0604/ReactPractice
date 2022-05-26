import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../modules/auth';
import { changeField, initializeForm } from '../../components/auth/AuthForm';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login
  }));
  // input change eventHandler
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };

  // form submit eventHandler
  const onSubmit = e => {
    e.preventDefault();
    
  }

  // when component initial rendering, form clear
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;