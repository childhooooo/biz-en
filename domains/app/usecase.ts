import { useContext } from 'react';
import { AppState, AppStateContext } from './presenters/AppStateProvider';

export function useAppState(): AppState {
  return useContext(AppStateContext);
}
