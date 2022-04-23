import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04, CloseButton, Border } from 'components/element';

import { useRouter } from 'next/router';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

const ServiceMatchingMatchingEntryCompletePage: NextPage = () => {
  const router = useRouter();
  const id = Array.isArray(router.query?.id) ? router.query.id[0] : router.query.id;

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: 'マッチングエントリー', href: view.url(`service/matching/job/${id}/entry/new`) },
  ];

  return (
    <Page
      title={`エントリー完了 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト`}
      description=""
      path={`/service/matching/${id}/entry/complete`}
      ogType="article"
      header={(
        <EnHeader
          title={'エントリー完了 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト'}
          language="ja"
          routes={routes}
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray}>
        <EnPageTitle />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Title04 name='求人へのマッチングエントリーを受付しました' tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>※ 当社の就職支援スタッフより今後の対応についてメールを送らせていただきます。メールが届くまで数日かかる場合がありますので予めご了承ください。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Border color={color.gray} height="1px" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <CloseButton redirect={view.url('service/matching')} />
        </Stacked>
      </Stacked>
    </Page>
  );
}

export default ServiceMatchingMatchingEntryCompletePage;
