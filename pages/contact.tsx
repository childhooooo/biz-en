import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { ContactForm } from 'components/container';
import { PageTitle } from 'components/block';
import { Title03, IconButton03 } from 'components/element';

import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

interface Props { }

interface InputContact {
  kind: string;
  name: string;
  company: string;
  tel: string;
  email: string;
  reEmail: string;
  content: string;
}

const ContactPage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'お問い合わせ', href: view.url('contact') },
  ];

  const { register, handleSubmit, formState: { errors } } = useForm<InputContact>();
  const onSubmit: SubmitHandler<InputContact> = data => console.log(data);

  return (
    <Page
      title="お問い合わせ | 株式会社ビズソリューションズ"
      description=""
      path="/contact"
      ogType="article"
      header={(
        <Header
          title="お問い合わせ | 外国人材採用支援サービス（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer />}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Title03 name="お問い合わせ" tag="h2" icon={view.url('images/icon_mail.png')} />
      </Stacked>

      <Stacked paddingPos="top" wrap isSection>
        <PlainText>
          <p>
            お問い合わせは、下記フォームにご記入の上送信してください。<br />
            <span style={{ color: color.orange }}>※</span>は必須項目です。電話番号またはメールアドレスに入力ミスがありますとご連絡ができません。<br />
            お問い合わせいただいた方の個人情報は、ご連絡のため以外の目的で使用することはありません。
          </p>
        </PlainText>
      </Stacked>

      <Stacked wrap isSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stacked paddingPos="none">
            <ContactForm>
              <div className="required">
                <dt>
                  <label htmlFor="kind">お問い合わせ内容</label>
                </dt>
                <dd>
                  <ul className="radio-group">
                    <li>
                      <input id="kind-seek" type="radio" checked {...register("kind", { required: true })} />
                      <label htmlFor="kind-seek">お仕事探しに関するお問い合わせ</label>
                    </li>

                    <li>
                      <input id="kind-recruit" type="radio" checked {...register("kind", { required: true })} />
                      <label htmlFor="kind-recruit">求人・人材募集に関するお問い合わせ（会社名・部署名をご記入ください）</label>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="required">
                <dt>
                  <label htmlFor="name">お名前</label>
                </dt>
                <dd>
                  <input id="name" type="text" {...register("name", { required: true })} />
                </dd>
              </div>

              <div>
                <dt>
                  <label htmlFor="company">会社名・部署名</label>
                </dt>
                <dd>
                  <input id="company" type="text" {...register("company")} />
                </dd>
              </div>

              <div>
                <dt><label htmlFor="tel">電話番号</label></dt>
                <dd>
                  <input id="tel" type="tel" {...register("tel")} />
                </dd>
              </div>

              <div className="required">
                <dt><label htmlFor="email">メールアドレス</label></dt>
                <dd>
                  <input id="email" type="email" {...register("email", { required: true })} />
                </dd>
                <dd>
                  <input id="re-mail" type="email" {...register("reEmail", { required: true })} />
                </dd>
              </div>

              <div className="required">
                <dt><label htmlFor="content">お問い合わせ内容</label></dt>
                <dd>
                  <textarea id="content" rows={10} {...register("content", { required: true })} />
                </dd>
              </div>
            </ContactForm>
          </Stacked>

          <Stacked paddingPos="top">
          <Confirmation>
            <input type="checkbox" required />
            <label><a href={view.url('privacy-policy')}>プライバシーポリシー</a>に同意した上で送信してください。</label>
          </Confirmation>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow">
            <Columns justify="center">
            <Block width="500px">
              <IconButton03
                name="同意して送信する"
                icon={view.url('images/icon_mail_white.png')}
                color={color.blue}
                kind="submit"
              />
            </Block>
            </Columns>
          </Stacked>
        </form>
      </Stacked>
    </Page>
  );
};

const Confirmation = styled.div`
display: flex;
justify-content: center;
align-items: center;

label {
  margin-left: .5rem;
  font-size: 1.25rem;
}

a {
  color: ${color.blue};
}
`;

export default ContactPage;
