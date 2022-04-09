import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04, CloseButton, Border } from 'components/element';

import { useRouter } from 'next/router';
import { view } from 'unflexible-ui-legacy';
import { EditType, EditTypeKind } from 'domains/matching';
import { color } from 'lib/config';

const ServiceMatchingEditRequestCompletePage: NextPage = () => {
  const router = useRouter();
  const rawEditType = Array.isArray(router.query?.type) ? router.query?.type[0] : router.query?.type || '0';
  const editType = EditType.fromNumber(parseInt(rawEditType));

  let title: string;
  let message: string;
  if(editType.kind === EditTypeKind.MODIFY) {
    title = "会員（求職者）情報の変更申請を受付しました";
    message = "※ 「登録情報の変更」の申請から、手続き完了まで数日かかる場合がありますので予めご了承ください。";
  } else {
    title = "会員（求職者）情報の退会申請を受付しました";
    message = "※ 「登録情報の退会」の申請から、手続き完了まで数日かかる場合がありますので予めご了承ください。";
  }

  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材マッチングサイト', href: view.url('service/matching') },
    { name: title, href: view.url('service/matching/seeker/edit-request/complete') },
  ];

  return (
    <Page
      title={`${title} | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト`}
      description=""
      path={`/service/matching/account/user/modify-accepted`}
      ogType="article"
      header={(
        <EnHeader
          title={`申請を受け付けました | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト`}
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
          <Title04 name={title} tag="h2" color={color.semiSkyBlue} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>{message}</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Border color={color.gray} height="1px" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <CloseButton redirect={view.url('service/matching/seeker/edit-request/new')} />
        </Stacked>
      </Stacked>
    </Page>
  );
}

export default ServiceMatchingEditRequestCompletePage;
