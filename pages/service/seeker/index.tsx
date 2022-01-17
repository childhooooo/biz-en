import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui';
import { Header, Footer } from 'components/layout';
import { Inset } from 'components/container';
import { PageTitle, List02 } from 'components/block';
import { Button02 } from 'components/element';
import { color, font } from 'lib/config';

import { view } from 'unflexible-ui';

interface Props {}

const ServiceSeekerPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '求職者登録でできること', href: view.url('service/seeker') }
  ];

  return (
    <Page
      title="求職者登録でできること | 縁 -en-"
      description=""
      path="/service/seeker"
      ogType="article"
      header={(
        <Header
          title="求職者登録でできること | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="求職者登録でできること"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingPos="top" wrap>
        <Columns justify="center" gap="normal" wrapXL="nowrap">
          <Block>
            <Figure src={view.url('images/contents_01.png')} name="マッチングサービス" width="300px" />
          </Block>

          <Block shrink={2}>
            <Stacked paddingPos="none">
              <Figure src={view.url('images/logo_en.png')} name="縁 -en-" width="200px" />
              <PlainText>
                <p>群馬県内に就職を希望する外国人材就職応援サイト</p>
              </PlainText>
            </Stacked>

            <Stacked paddingPos="top" paddingSize="narrow">
              <PlainText baseSizeXL="1.5rem" baseColor={color.textBlue} baseLineHeight="1.5" baseFamily={font.sansSerif}>
                <p>「求職者登録はこちら」より会員登録（無料）を行うと、<br/>求人企業とのマッチングサービスを無料で受けることが<br/>できます。今すぐ登録をしよう！</p>
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
              <p>求職者登録をしていただくと外国人材求人検索メニューから興味・関心のある求人に対してマッチングエントリーができます。会員登録及び当サイトのサービス利用に関し、費用は一切発生しません（無料）。</p>
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
              <p>マッチングエントリー後、当社の就職支援スタッフとのWEB面談可能な日時を予約していただきます。WEB面談ではスキルやキャリア、就職希望時期などのヒヤリングを行い、応募書類を作成します。</p>
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
              <p>WEB面談後、マッチングエントリーした求人企業に、当社より「応募書類」を提出します。「一次（書類）選考」に合格された方は、「二次（試験・面接）選考」に進みます。一次選考の結果は当社より、応募者さまにご連絡します。</p>
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
              <p>求人企業さまの対応に応じて、応募者さまと求人企業担当者さまと「二次（面接）選考」を対面またはWEBで行います。面接後、採用の可否については、企業さまから直接、または当社よりご連絡します。</p>
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
              <p>新しい環境での就業スタートまで、「雇用契約書」の締結、また必要に応じて「在留資格変更」、転居を伴う場合の住居確保など、より豊かな生活づくりのサポートをさせていただきます。</p>
            </PlainText>
          </Inset>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="" isSection wrap>
        <List02 name="会員になるメリット">
          <li>応募書類（エントリーシート）の書き方を就職支援のプロがアドバイスします。</li>
          <li>あなたのスキルやキャリアが活かせる、外国人材求人企業を探してご紹介します。</li>
        </List02>
      </Stacked>

      <Stacked wrap>
        <Columns justify="center">
          <Button02 name="求職者登録はこちら" kind="link" href={view.url('service/seeker/new')} />
        </Columns>
      </Stacked>
    </Page>
  );
};

export default ServiceSeekerPage;
