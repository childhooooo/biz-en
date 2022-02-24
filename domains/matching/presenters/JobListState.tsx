import { ReactNode } from 'react';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Job } from '../entities/job';

const OrderKind = {
  ASC: 0,
  DESC: 1
} as const;
export type OrderKind = typeof OrderKind[keyof typeof OrderKind];
export const OrderKindValues = Object.values(OrderKind);

export class Order {
  public readonly kind: OrderKind;

  constructor(kind: OrderKind) {
    this.kind = kind;
  }

  toString(): string | null {
    return Order.toString(this.kind);
  }

  static toString(kind: OrderKind): string | null {
    switch(kind) {
      case OrderKind.ASC:
        return '昇順';
      case OrderKind.DESC:
        return '降順';
      default:
        return '不明';
    }
  }

  static fromNumber(value: number): Order {
    switch(value) {
      case 0:
        return new Order(OrderKind.ASC);
      case 1:
        return new Order(OrderKind.DESC);
      default:
        return new Order(OrderKind.ASC);
    }
  }
}

export interface JobListState {
  list: {
    value: Job[];
    setValue: Dispatch<SetStateAction<Job[]>>;
  };
  page: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>
  };
  perPage: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>
  };
  order: {
    value: Order;
    setValue: Dispatch<SetStateAction<Order>>
  };
  orderBy: {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
  },
  size: {
    value: number,
    setValue: Dispatch<SetStateAction<number>>
  }
}

export const JobListStateContext = createContext<JobListState>(undefined as never);

export function useJobListState(): JobListState {
  return useContext(JobListStateContext);
}

interface Props {
  initialJobList: {
    list: Job[];
    size: number;
  };
  children: ReactNode;
}

export const JobListStateProvider = ({ initialJobList, children }: Props) => {
  const [list, setList] = useState(initialJobList.list);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [order, setOrder] = useState(Order.fromNumber(0));
  const [orderBy, setOrderBy] = useState('createdAt');
  const [size, setSize] = useState<number>(initialJobList.size);

  return (
    <JobListStateContext.Provider value={{
      list: {
        value: list,
        setValue: setList
      },
      page: {
        value: page,
        setValue: setPage
      },
      perPage: {
        value: perPage,
        setValue: setPerPage
      },
      order: {
        value: order,
        setValue: setOrder
      },
      orderBy: {
        value: orderBy,
        setValue: setOrderBy
      },
      size: {
        value: size,
        setValue: setSize
      }
    }}>
      {children}
    </JobListStateContext.Provider>
  );
};
