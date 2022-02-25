import { ReactNode } from 'react';
import styled from 'styled-components';
import { useSeekerAuthState } from '../presenters/SeekerAuthState';

interface Props {
  children: ReactNode;
}

const AuthRequired = ({ children }: Props) => {
  const authState = useSeekerAuthState();

  return (
    <>
      {authState.user.value !== null && children}
      {authState.user.value === null && <SignIn />}
    </>
  );
};

const SignIn = () => {
  return (
    <Component>
      <p>サインイン</p>
    </Component>
  );
}

const Component = styled.div`
`

export default AuthRequired;
