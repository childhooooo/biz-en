import { ReactNode } from 'react';

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Job } from '../entities/job';

export interface JobListState {
  list: {
    value: Job[],
    setValue: Dispatch<SetStateAction<Job[]>>
  };
}

export const JobListStateContext = createContext<JobListState>(undefined as never);

export function useJobListState(): JobListState {
  return useContext(JobListStateContext);
}

interface Props {
  initialJobList: Job[];
  children: ReactNode;
}

export const JobListStateProvider = ({ initialJobList, children }: Props) => {
  const [list, setList] = useState(initialJobList);

  return (
    <JobListStateContext.Provider value={{
      list: {
        value: list,
        setValue: setList
      }
    }}>
      {children}
    </JobListStateContext.Provider>
  );
};
