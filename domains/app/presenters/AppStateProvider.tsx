import { ReactNode, Dispatch, SetStateAction, createContext } from 'react';
import { useState } from 'react';
import { Seeker } from 'domains/matching';

export interface Image {
  name: string;
  url: string;
}

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
  },
  popupImage: {
    state: Image | null,
    setState: Dispatch<SetStateAction<Image | null>>
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
  const popupImage = useState<Image | null>(null);

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
      },
      popupImage: {
        state: popupImage[0],
        setState: popupImage[1]
      }
    }}>
      {children}
    </AppStateContext.Provider>
  );
};
