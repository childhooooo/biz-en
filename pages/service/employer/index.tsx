import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { Inset } from 'components/container';
import { PageTitle, List02 } from 'components/block';
import { Button02 } from 'components/element';
import { color, font } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props {}

const ServiceEmployerPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '求人企業登録でできること', href: view.url('service/employ') }
  ];

  return (
    <Page
      title="求人企業登録でできること | 縁 -en-"
      description=""
      path="/service/employ"
      ogType="article"
      header={(
        <Header
          title="求人企業登録でできること | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="求人企業登録でできること"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" wrap>
        <Columns justify="center" gap="normal" wrapXL="nowrap">
          <Block>
            <Figure src={view.url('images/resume_thumb.jpg')} name="履歴書" width="400px" />
          </Block>

          <Block shrink={2} widthXL="600px">
            <Stacked paddingPos="none">
              <Figure src={view.url('images/logo_en.png')} name="縁 -en-" width="200px" />
              <PlainText>
                <p>群馬県内に就職を希望する外国人材就職応援サイト</p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <PlainText baseSizeXL="1.5rem" baseColor={color.textBlue} baseLineHeight="1.5" baseFamily={font.sansSerif}>
                <p>採用が決まるまで費用が発生しない外国人材紹介サービスです。初期費用0円の完全成功報酬型！のご利用を検討してみてはいかがですか。</p>
              </PlainText>
            </Stacked>
          </Block>
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>求人企業登録（基本情報登録）をしていただくと、当サイトに無料で求人掲載して、募集することができます。また、当社に登録している外国人材のなかから、ご要望にマッチする外国人材を候補者としてご紹介させていただきます。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>求人企業（基本情報）登録後、当社の専任担当者から連絡させていただき、職務内容や雇用条件などを詳しくヒアリングいたします。求職者に効果的な求人情報を提案、作成および「人材紹介契約」締結させていただきます。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>求人情報をマッチングサイトに公開して、求職者からのマッチングエントリーを受け付けます。また、求職者データベースより採用要件に合致する外国人材に対して応募を募ります。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>ご要望にマッチする外国人材およびマッチングエントリーのあった求職者の応募書類を候補者としてご紹介させていただき、書類選考していただきます。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>書類選考の結果を当社より合格者に通知後、企業と外国人材（応募者）との面接日程を調整し、対面または WEB で面接考していただきます。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin">
        <Columns justify="center">
          <Figure src={view.url('images/arrow_sky.png')} name="↓" width="50px" />
        </Columns>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="thin" isSection wrap>
        <Stacked paddingPos="none" color={color.skyBlue} >
          <Inset size="1.5rem">
            <PlainText>
              <p>外国人材の紹介から採用決定までのコンサルティングは全て無料で対応いたします。雇用契約締結後、紹介手数料（コンサルティング料）を支払いいただきます。※入社後の退職は規定に基づき手数料を返還いたします。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="" isSection wrap>
        <List02 name="会員になるメリット">
          <li>募集要件に合致する人材を採用できるまで紹介を無料で受けられます。採用が決まるまでは料金はかかりません。</li>
          <li>当社の専任担当者が介在し、面接日程の調整や合否連絡、雇用スタートまでのさまざまな業務をサポートします。</li>
        </List02>
      </Stacked>

      <Stacked wrap>
        <Columns justify="center">
          <Button02 name="求人企業登録はこちら" kind="link" href={view.url('service/employer/new')} />
        </Columns>
      </Stacked>
    </Page>
  );
};

export default ServiceEmployerPage;
