import { ReactNode } from 'react';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

export interface SeekerAuthState {
  seekerId: {
    value: string | null,
    setValue: Dispatch<SetStateAction<string | null>>
  }
}

export const SeekerAuthStateContext = createContext<SeekerAuthState>(undefined as never);

export function useSeekerAuthState(): SeekerAuthState {
  return useContext(SeekerAuthStateContext);
}

interface Props {
  children: ReactNode;
}

export const SeekerAuthStateProvider = ({ children }: Props) => {
  const [seekerId, setSeekerId] = useState<string | null>(null);

  return (
    <SeekerAuthStateContext.Provider value={{
      seekerId: {
        value: seekerId,
        setValue: setSeekerId
      }
    }}>
      {children}
    </SeekerAuthStateContext.Provider>
  );
};
