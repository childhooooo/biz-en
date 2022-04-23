import type { NextPage } from 'next';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle, FormTable } from 'components/block';

import styled from 'styled-components';
import { darken } from 'polished';
import { view } from 'unflexible-ui-legacy';
import { color, screen } from 'lib/config';

interface Fields {
  password: string;
}

interface Props { }

const ToolsBcryptPage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Tools', href: view.url('tools') },
    { name: 'Password Generator', href: view.url('tools/bcrypt') }
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Fields>();

  const [hashed, setHashed] = useState('');

  const onSubmit: SubmitHandler<Fields> = async (input) => {
    try {
      const res = await fetch('/api/tools/bcrypt', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setHashed(data.hashed);
    } catch (e: any) {
      alert('上手く変換できませんでした');
    }
  };

  return (
    <Page
      title="Password Generator | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path="/about/company"
      ogType="article"
      header={(
        <EnHeader
          title="会社概要 | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
          routes={routes}
        />
      )}
      footer={<Footer />}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <EnPageTitle />
      </Stacked>

      <Stacked paddingSize="normal" isSection wrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTable>
            <tr className="required">
              <th>パスワード</th>
              <td>
                <div>
                  <input type="text" {...register('password', { required: true })} />
                </div>
              </td>
            </tr>
            <tr>
              <th>ハッシュ化済みパスワード</th>
              <td>
                <div>
                  <textarea value={hashed} readOnly={true} />
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <Submit type="submit">
                  <span>変換する</span>
                </Submit>
              </td>
            </tr>
          </FormTable>
        </form>
      </Stacked>
    </Page>
  );
};

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  padding: .75rem;
  background-color: ${color.marineBlue};
  border-radius: 15px;
  transition-duration: .3s;

  &:hover {
    background-color: ${darken(.05, color.marineBlue)};
  }

  img {
    width: auto;
    height: 1.5rem;
  }

  span {
    margin-left: .75rem;
    font-size: 1rem;
    color: ${color.white};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: 100%;
  }
`;

export default ToolsBcryptPage;
