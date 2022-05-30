import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const navigate = useNavigate();

  // input change eventHandler
  const onChange = (e) => {
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
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    // 하나라도 비어 있다면
    if ([username, password, passwordConfirm].includes('')) {
      setError('you must be fill in the blank');
      return;
    }
    // Wrong Password
    if (password !== passwordConfirm) {
      setError('password do not match');
      dispatch(
        changeField({ form: 'register', key: 'password', value: '' }),
      );
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
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
      // already exists username
      if (authError.response.status === 409) {
        setError('already exists username');
        return;
      }
      // etc reason
      setError('Failure register');
      return;
    }

    if (auth) {
      console.log('register SUCCESS');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 설정됐는지 확인
  useEffect(() => {
    if (user) {
      navigate('/'); // go to HOMEPAGE
    }
  }, [navigate, user]);
  
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;