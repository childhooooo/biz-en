import { ReactNode, Dispatch, SetStateAction, createContext } from 'react';
import { useState } from 'react';
import { Seeker } from 'domains/matching';

export interface AppState {
  seeker: {
    state: Seeker | null,
    setState: Dispatch<SetStateAction<Seeker | null>>
  },
  employerId: {
    state: number | null,
    setState: Dispatch<SetStateAction<number | null>>
  },
  busy: {
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
  }
}

export const AppStateContext = createContext({} as AppState);

interface Props {
  children: ReactNode;
}

export const AppStateProvider = ({ children }: Props) => {
  const seeker = useState<Seeker | null>(null);
  const employerId = useState<number | null>(null);
  const busy = useState<boolean>(false);

  return (
    <AppStateContext.Provider value={{
      seeker: {
        state: seeker[0],
        setState: seeker[1]
      },
      employerId: {
        state: employerId[0],
        setState: employerId[1]
      },
      busy: {
        state: busy[0],
        setState: busy[1]
      }
    }}>
      {children}
    </AppStateContext.Provider>
  );
};
