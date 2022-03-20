import styled from 'styled-components';
import { color, font } from 'lib/config';

export interface Route {
  name: string;
  href: string;
}

interface Props {
  routes: Route[];
}

const BreadCrumb = ({ routes }: Props) => {
  return (
    <Component>
    {routes.map((s: any, index: number) => {
        return (
          <li key={index}>
            <a href={s.href}>{s.name}</a>
          </li>
        );
      })}
    </Component>
  );
};

const Component = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  a {
    font-family: ${font.sansSerif};
    text-decoration: none;
    color: ${color.black};

    &:hover {
      text-decoration: underline;
    }
  }

  li:not(:first-child) {
    display: flex;
    align-items: center;

    &:before {
      content: '>';
      display: block;
      margin: 0 .15rem;
      color: ${color.gray};
    }
  }

  li:last-child {
    a {
      color: ${color.gray};
    }
  }
`

export default BreadCrumb;
