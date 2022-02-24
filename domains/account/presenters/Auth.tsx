import { Columns, Block } from 'unflexible-ui-legacy';
import { IconButton03 } from 'components/element';

import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

interface Credential {
  email: string,
  password: string
}

interface Props {
  withNewLink?: boolean;
}

const Auth = ({ withNewLink }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Credential>();

  const onSubmit: SubmitHandler<Credential> = async (input: any) => {
  }

  return (
    <Component>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <th>ログイン</th>
            <td className="form">
              <p>
                <label htmlFor="">会員ID<br/>（メールアドレス）</label>
                <input type="email" placeholder="会員IDを入力" {...register('email', { required: true })} />
              </p>

              <p>
                <label htmlFor="">パスワード</label>
                <input type="password" placeholder="パスワードを入力" {...register('password', { required: true })} />
              </p>
            </td>
            <td className="actions">
              <p>
                <a href="">▶会員IDやパスワードを忘れた方</a>
              </p>

              <p>
                <Block width="250px">
                  <IconButton03 name="ログイン" icon={view.url('images/icon_login.png')} color="#00b4ff" kind="submit" />
                </Block>
              </p>
            </td>
          </tr>

          {withNewLink &&
            <tr>
              <th>会員登録</th>
              <td colSpan={2}>
                <Columns justify="center">
                  <Block width="400px">
                    <IconButton03
                      name="会員（求職者）登録はこちら"
                      kind="link"
                      href={view.url('service/matching/account/user/new')}
                      icon={view.url('images/arrow_white.png')}
                      color={color.theme}
                    />
                  </Block>
                </Columns>
              </td>
            </tr>
          }
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

  p {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  a {
    color: #00b4ff;
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

input[type="text"], input[type="email"], input[type="password"] {
  width: 500px;
  margin-left: 1rem;
  padding: .75rem;
  border: 1px solid ${color.black};
}

label {
  width: 160px;
}
`

export default Auth;
