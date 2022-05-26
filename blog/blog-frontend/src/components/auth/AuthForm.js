import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/*
  회원가입 또는 로그인 폼을 보여 줍니다.
*/

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/* 
  styling input 
*/

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/*
  From Footer or Login Register Link
*/
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>Login</h3>
      <form>
        <StyledInput autoComplete='username' placeholder="ID" />
        <StyledInput
          autoComplete='new-password'
          name="password"
          placeholder='password'
          type='password'
        />
        <Button>
          Login
        </Button>
      </form>
      <Footer>
        <Link to="/register">Register</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;