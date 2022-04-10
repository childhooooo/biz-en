import { Columns, Block } from 'unflexible-ui-legacy';
import { IconButton03 } from 'components/element';

import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';
import { useAppState } from 'domains/app';
import { Seeker, Credential } from 'domains/matching';

interface Props {
  withNewLink?: boolean;
}

const SeekerAuth = ({ withNewLink }: Props) => {
  const appState = useAppState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Credential>();

  const onSubmit: SubmitHandler<Credential> = async (input: Credential) => {
    try {
      const res = await fetch(`/api/matching/seeker/login/`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const seeker = Seeker.deserialize(JSON.stringify(data.seeker));
      appState.seeker.setState(seeker);
    } catch (e: any) {
      console.error(e);
      alert('うまくログインできませんでした');
      appState.seeker.setState(null);
      reset();
    }
  }

  return (
    <Component>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tbody>
            <tr>
              <th>ログイン</th>
              <td className="form">
                <div>
                  <label htmlFor="email">会員ID<br />（メールアドレス）</label>
                  <input id="email" type="email" placeholder="会員IDを入力" autoComplete="email" {...register('email', { required: true })} />
                </div>

                <div>
                  <label htmlFor="password">パスワード</label>
                  <input id="password" type="password" placeholder="パスワードを入力" autoComplete="current-password" {...register('password', { required: true })} />
                </div>

                {(errors.email || errors.password) && <p className="error">正しく入力してください</p>}
              </td>
              <td className="actions">
                <div>
                  <a href="">▶会員IDやパスワードを忘れた方</a>
                </div>

                <div>
                  <Block width="250px" widthS="100%">
                    <IconButton03 name="ログイン" icon={view.url('images/icon_login.png')} color="#00b4ff" kind="submit" />
                  </Block>
                </div>
              </td>
            </tr>

            {withNewLink &&
              <tr>
                <th>会員登録</th>
                <td colSpan={2}>
                  <Columns justify="center">
                    <Block width="400px" widthS="100%">
                      <IconButton03
                        name="会員（求職者）登録はこちら"
                        kind="link"
                        href={view.url('service/matching/seeker/new')}
                        icon={view.url('images/arrow_white.png')}
                        color={color.theme}
                      />
                    </Block>
                  </Columns>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </form>
    </Component>
  );
};

const Component = styled.div`
border: 1px solid ${color.gray};
border-top: 3px solid ${color.semiSkyBlue};
font-family: ${font.sansSerif};

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
}

td {
  padding: 2rem;

  > div {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  a {
    color: ${color.lightBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

tr {
  width: 100%;

  &:not(:first-child) {
    border-top: 1px solid ${color.gray};
  }
}

.error {
  color: ${color.red};
  margin-top: 1rem;

  &::before {
    content: '！';
  }
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 500px;
  margin-left: 1rem;
  padding: .75rem;
  border: 1px solid ${color.black};
  font-size: 16px;
}

label {
  width: 160px;
}

@media only screen and (max-width: ${screen.l}px) {
  input[type="text"], input[type="email"], input[type="password"] {
    width: 400px;
    margin-left: 0;
    margin-top: .5rem;
  }

  td {
    > div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

@media only screen and (max-width: ${screen.m}px) {
  tr {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  th {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    text-align: left;
  }

  td {
    width: 100%;
    padding: 1rem 1.5rem;
    padding-top: 0;
  }

  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
  }
}
`

export default SeekerAuth;
