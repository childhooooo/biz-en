import type { NextPage } from 'next';
import { Page, Stacked, Columns, PlainText } from 'unflexible-ui';
import { Header, Footer } from 'components/layout';
// import {} from 'components/block';
// import {} from 'components/element';

import { Job } from 'domains/matching';
import { color } from 'lib/config';
import { view } from 'unflexible-ui';

interface Props {}

const ServiceMatchingPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') }
  ];

  return (
    <Page
      title="外国人材マッチングサイト | 縁 -en-"
      description=""
      path="/service/matching"
      ogType="article"
      header={(
        <Header
          title="外国人材マッチングサイト | 外国人材群馬支援事業（株式会社ビズソリューションズ）"
          language="ja"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >

      <Stacked paddingSize="thin" color={color.blue} wrap>
        <PlainText h3Color={color.white} h3Weight="400" h3SizeXL="1.25rem" h3SizeL="1.25rem" h3SizeM="1.25rem" h3SizeS="1.25rem" h3SizeXS="1.25rem">
          <h2>求人情報検索</h2>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Columns>
        </Columns>
      </Stacked>
    </Page>
  );
};

export default ServiceMatchingPage;
