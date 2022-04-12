import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { ContactForm } from 'components/container';
import { PageTitle } from 'components/block';
import { Title03, IconButton03 } from 'components/element';

import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';
import { InputContact, createContact } from 'domains/contact';

interface Props { }

interface Fields {
  kind: string;
  name: string;
  company: string;
  tel: string;
  email: string;
  reEmail: string;
  content: string;
}

const ContactPage: NextPage = ({ }: Props) => {
  const router = useRouter();

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'お問い合わせ', href: view.url('contact') },
  ];

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<Fields>();
  const onSubmit: SubmitHandler<Fields> = async (data) => {
    try {
      const input = InputContact.fromObject(data);
      await createContact(input);
      router.push(view.url('contact/complete'));
    } catch(e: any) {
      console.log(e);
      alert('何か問題が発生しました。もう一度お試しください。');
    }
  };

  return (
    <Page
      title="お問い合わせ | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/contact"
      ogType="article"
      header={(
        <Header
          title="お問い合わせ | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
          selected="contact"
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
        <PlainText baseFamily={font.sansSerif}>
          <p>
            お問い合わせは、下記フォームにご記入の上送信してください。<br />
            <span style={{ color: color.orange }}>※</span>は必須項目です。電話番号またはメールアドレスに入力ミスがありますとご連絡ができません。<br />
            お問い合わせいただいた方の個人情報は、ご連絡のため以外の目的で使用することはありません。
          </p>
        </PlainText>
      </Stacked>

      <Stacked wrap isSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stacked paddingPos="none">
            <ContactForm>
              <div className="required">
                <dt>
                  <label htmlFor="kind">お問い合わせ内容</label>
                </dt>
                <dd>
                  <ul className="radio-group">
                    <li>
                      <input id="kind-seek" type="radio" value="お仕事に関するお問い合わせ" {...register("kind", { required: true })} />
                      <label htmlFor="kind-seek">お仕事探しに関するお問い合わせ</label>
                    </li>

                    <li>
                      <input id="kind-recruit" type="radio" value="求人・人材募集に関するお問い合わせ" {...register("kind", { required: true })} />
                      <label htmlFor="kind-recruit">求人・人材募集に関するお問い合わせ（会社名・部署名をご記入ください）</label>
                    </li>
                  </ul>
                  {errors.kind && <p className="error">選択してください</p>}
                </dd>
              </div>

              <div className="required">
                <dt>
                  <label htmlFor="name">お名前</label>
                </dt>
                <dd>
                  <input id="name" type="text" {...register("name", { required: true })} />
                  {errors.name && <p className="error">正しく入力してください</p>}
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
                  <input id="email" type="email" placeholder="半角で入力してください" {...register("email", { required: true })} />
                  {errors.email && <p className="error">正しく入力してください</p>}
                </dd>
                <dd>
                  <input id="re-mail" type="email" placeholder="もう一度入力してください" {...register("reEmail", { required: true, validate: (v: string) => v === getValues('email') })} />
                  {errors.reEmail && <p className="error">正しく入力してください</p>}
                </dd>
              </div>

              <div className="required">
                <dt><label htmlFor="content">お問い合わせ内容</label></dt>
                <dd>
                  <textarea id="content" rows={10} {...register("content", { required: true })} />
                  {errors.content && <p className="error">正しく入力してください</p>}
                </dd>
              </div>
            </ContactForm>
          </Stacked>

          <Stacked paddingPos="top">
            <Confirmation>
              <a href={view.url('privacy-policy')} target="_blank" rel="noreferrer">プライバシーポリシー</a>に同意した上で送信してください。
            </Confirmation>
          </Stacked>

          <Stacked paddingPos="top" paddingSize="narrow">
            <Columns justify="center">
              <Block width="500px" widthS="100%">
                <IconButton03
                  name="同意して送信する"
                  icon={view.url('images/icon_mail_white.png')}
                  color={color.blue}
                  kind="submit"
                />
              </Block>
            </Columns>
          </Stacked>
        </Form>
      </Stacked>
    </Page>
  );
};

const Form = styled.form`
.error {
  margin-top: .5rem;
  color: ${color.red};

  &:before {
    content: '！';
  }
}
`;

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
