import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchJobListOfPage, setPage } from '../usecase';
import { useJobListState } from './JobListState';
import { color } from 'lib/config';

interface Props {
}

const Pagination = ({}: Props) => {
  const state = useJobListState();
  const [pages, setPages] = useState<number[]>([]);

  const pageSetter = (page: number) => {
    return () => {
      fetchJobListOfPage(state, page);
    }
  }

  useEffect(() => {
    const totalPages = Math.ceil(state.size.value / state.perPage.value);
    const pages: number[] = [];
    for(let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
    setPages(pages);
  }, [state.perPage.value, state.size.value]);

  useEffect(() => {
    setPage(state, 1);
  }, []);

  return (
    <Component>
      {state.page.value > 1 &&
        <button className="before" onClick={pageSetter(state.page.value - 1)}>
          ＜
        </button>
      }

      <ul>
        {pages.map((p: number) => {
          return (
            <li key={p}>
              <button
                className={`toPage ${p === state.page.value ? 'selected' : ''}`}
                onClick={pageSetter(p)}
              >{p}</button>
            </li>
          );
        })}
      </ul>

      {state.page.value < pages.length &&
        <button className="after" onClick={pageSetter(state.page.value + 1)}>
          ＞
        </button>
      }
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  border: 1px solid ${color.gray};

  ul {
    display: flex;
    list-style: none;
  }

  li:not(:first-child) {
    border-left: 1px solid ${color.gray};
  }

  button {
    padding: .5rem;
    line-height: 1;

    &:hover {
      background-color: ${color.lightGray};
    }
  }

  .selected {
    color: ${color.blue};
  }

  .before, .after {
    color: ${color.blue};
  }

  .before {
    border-right: 1px solid ${color.gray};
  }

  .after {
    border-left: 1px solid ${color.gray};
  }
`

export default Pagination;
