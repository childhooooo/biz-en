import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle } from 'components/block';
import { MenuLink } from 'components/element';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props {}

const ServicePage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: '外国人材紹介事業について', href: view.url('service') }
  ];

  return (
    <Page
      title="外国人材採用支援サービス | 株式会社ビズソリューションズ"
      description=""
      path="/service"
      ogType="article"
      header={(
        <Header
          title="外国人材採用支援サービス（株式会社ビズソリューションズ）"
          language="ja"
          selected="service"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="外国人材採用支援サービス"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingSize="narrow" color={color.lightGray} isSection wrap>
        <Columns repeat={3} repeatM={2} repeatXS={1} gap="normal">
          <Block height="100%">
            <MenuLink
              name="外国人材紹介サービス"
              href={view.url('service/staff-agency')}
              image={view.url('images/service_link_service.jpg')}
              overview="海外の送り出し機関との提携とマッチングサイトで企業様の求人要件にかなう外国人材をご紹介いたします。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="外国人材マッチング"
              href={view.url('service/matching')}
              image={view.url('images/service_link_matching.png')}
              overview="無料で求人掲載できます。企業さまが採用できるまで何度でも候補者紹介が受けられます。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="日本語レッスン"
              href={view.url('service/lesson')}
              image={view.url('images/service_link_lesson.jpg')}
              overview="当社の概要やアクセスマップについてご確認いただけます。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="求職者登録でできること"
              href={view.url('service/matching/seeker')}
              icon={view.url('images/icon_family.png')}
              overview="群馬県内に就職を希望する外国人材向けの求人検索、求人企業とのマッチングサービスについてご案内しています。"
            />
          </Block>

          <Block height="100%">
            <MenuLink
              name="求人企業登録でできること"
              href={view.url('service/matching/employer')}
              icon={view.url('images/icon_handshake_green.png')}
              overview="外国人財の採用をお考えの企業様向けに、求人情報の無料掲載、求職者とのマッチングサービスについてご案内しています。"
            />
          </Block>
        </Columns>
      </Stacked>
    </Page>
  );
};

export default ServicePage;
