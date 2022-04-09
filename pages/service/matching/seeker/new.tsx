import type { NextPage } from 'next';
import { Page, Stacked, PlainText } from 'unflexible-ui-legacy';
import { EnHeader, Footer } from 'components/layout';
import { EnPageTitle } from 'components/block';
import { Title04, IconButton01 } from 'components/element';

import { NewSeeker } from 'domains/matching';
import { color } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props { }

const ServiceSeekerNewPage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '会員登録', href: view.url('service/seeker/new') }
  ];

  return (
    <Page
      title="会員登録 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
      description=""
      path="/service/matchig/seeker/new"
      ogType="article"
      header={(
        <EnHeader
          title="会員登録 | 縁 -en- | 群馬県内に就職を希望する外国人材就職応援サイト"
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

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <Title04 name="会員（求職者）登録" tag="h2" color={color.semiSkyBlue} />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" wrap>
        <PlainText>
          <p>プロフィールの各項目を記入してください。<br />会員登録の完了後、ご登録の会員ID（メールアドレス）・パスワードでログインをして、関心のある求人へマッチングエントリーください。<br />会員登録および求人にマッチングエントリーされた方には、当社の就職支援スタッフとのWEB面談可能な日時を予約していただくために、ご登録メールアドレスにメールを送信します。WEB面談では、プロフィールの補足として、応募書類（エントリーシート）を作成するためのヒヤリングを行います。<br />その上で応募書類を作成し、あなたのスキルやキャリアが活かせる、外国人材求人企業をご紹介します。<br />※本サービスは求職活動を行う外国人の方を対象としたサービスです。外国人以外の方の登録はご遠慮ください。</p>
        </PlainText>
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow" isSection wrap>
        <Stacked paddingPos="none">
          <IconButton01 name="求職者登録でできること" kind="link" href={view.url('service/matching/seeker')} icon={view.url('images/icon_family.png')} />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>群馬県内に就職を希望する外国人材向けの求人検索、求人企業とのマッチングサービスについてご案内しています。</p>
          </PlainText>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="both" paddingSize="narrow" isSection wrap>
        <NewSeeker />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="">
      </Stacked>
    </Page>
  );
};

export default ServiceSeekerNewPage;
