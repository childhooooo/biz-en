import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, PlainText, Figure } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle, Table01 } from 'components/block';
import { color } from 'lib/config';

import { view } from 'unflexible-ui-legacy';

interface Props {}

const AboutCompanyPage: NextPage = ({}: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'About us', href: view.url('about') },
    { name: '会社概要', href: view.url('about/company') }
  ];

  return (
    <Page
      title="会社概要 | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/about/company"
      ogType="article"
      header={(
        <Header
          title="会社概要 | 外国人材群馬就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
          selected="about"
        />
      )}
      footer={<Footer/>}
      fixHeader
    >
      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <PageTitle
          name="会社概要"
          routes={routes}
        />
      </Stacked>

      <Stacked paddingSize="normal" isSection wrap>
        <Table01>
          <tr>
            <th>会社名</th>
            <td>株式会社ビズソリューションズ</td>
          </tr>

          <tr>
            <th>英語表記</th>
            <td>Bizsolutions Co.,Ltd.</td>
          </tr>

          <tr>
            <th>業務内容</th>
            <td>
              <ul>
                <li>人材の採用等に関するコンサルティング業務／有料職業紹介業</li>
                <li>特定技能外国人の支援受託業務</li>
                <li>人材採用支援業務と広報支援（ペーパーメディア・WEBページ等制作）業務を中心に、お客さまニーズにワンストップで対応。新卒、外国人材採用における広報から人材獲得、雇用定着サポートまで、お客さまの課題に対し高いクオリティサービスを提供。</li>
              </ul>
            </td>
          </tr>

          <tr>
            <th>設　立</th>
            <td>2020年1月</td>
          </tr>

          <tr>
            <th>本社所在地</th>
            <td>〒370-3503　群馬県北群馬郡榛東村新井2653番地6</td>
          </tr>

          <tr>
            <th>事業所</th>
            <td>〒370-0852　群馬県高崎市上中居町3丁目4-7　プレミール中居Ⅱ 105　（ISBC監理事業所）</td>
          </tr>

          <tr>
            <th>電話番号</th>
            <td>027-329-7846</td>
          </tr>

          <tr>
            <th>FAX</th>
            <td>027-329-6901</td>
          </tr>

          <tr>
            <th>営業時間</th>
            <td>8:30〜17:30</td>
          </tr>

          <tr>
            <th>定休日</th>
            <td>土曜日・日曜日・祝日</td>
          </tr>

          <tr>
            <th>資本金</th>
            <td>600万円</td>
          </tr>

          <tr>
            <th>代表者</th>
            <td>代表取締役社長　藤井正弘</td>
          </tr>

          <tr>
            <th>事業許可</th>
            <td>
              <ul>
                <li>有料職業紹介事業（10-ユ-300420）</li>
                <li>登録支援機関登録（21登-006091）</li>
                <li>古物商許可（第421032020046）</li>
              </ul>
            </td>
          </tr>

          <tr>
            <th>取引銀行</th>
            <td>群馬銀行、三井住友銀行</td>
          </tr>

          <tr>
            <th>加盟団体</th>
            <td>国際共生事業協同組合　監理団体（特定監理事業　許200400151）</td>
          </tr>
        </Table01>
      </Stacked>

      <Stacked paddingSize="wide">
      </Stacked>
    </Page>
  );
};

export default AboutCompanyPage;
