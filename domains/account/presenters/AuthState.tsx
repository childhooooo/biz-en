import { ReactNode } from 'react';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { User } from '../entities/user';

export interface AuthState {
  user: {
    value: User | null,
    setValue: Dispatch<SetStateAction<User | null>>
  }
}

export const AuthStateContext = createContext<AuthState>(undefined as never);

export function useAuthState(): AuthState {
  return useContext(AuthStateContext);
}

interface Props {
  children: ReactNode;
}

export const AuthStateProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthStateContext.Provider value={{
      user: {
        value: user,
        setValue: setUser
      }
    }}>
      {children}
    </AuthStateContext.Provider>
  );
};
