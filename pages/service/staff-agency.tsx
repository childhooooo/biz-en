import type { NextPage } from 'next';
import { Page, Stacked, Columns, Block, Figure, PlainText } from 'unflexible-ui-legacy';
import { Header, Footer } from 'components/layout';
import { PageTitle, StaffAgencyTitle, PriceTable } from 'components/block';
import { Border, IconText, Title05 } from 'components/element';
import { Features } from 'components/staff-agency';

import styled from 'styled-components';
import { rgba } from 'polished';
import { color, font, screen } from 'lib/config';
import { view } from 'unflexible-ui-legacy';

interface Props { }

const ServicePage: NextPage = ({ }: Props) => {
  const routes = [
    { name: 'TOP', href: view.url('') },
    { name: 'Service', href: view.url('service') },
    { name: '外国人材紹介サービス', href: view.url('service/staff-agency') }
  ];

  return (
    <Page
      title="外国人材紹介サービス | 群馬外国人材就職支援事業（株式会社ビズソリューションズ）"
      description=""
      path="/service/lesson"
      ogType="article"
      header={(
        <Header
          title="外国人材紹介サービス | 群馬外国人材就職支援事業（株式会社ビズソリューションズ）"
          language="ja"
          selected="service"
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

      <Stacked paddingPos="none" color={color.lightGray} isSection>
        <StaffAgencyTitle />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Columns repeat={2} repeatS={1} gap="normal" align="flex-start">
            <Block height="50%" fixRatio>
              <Figure
                name="技術・人文知識・国際業務"
                src={view.url('images/profile_staff-agency_01.jpg')}
                width="100%"
                height="100%"
              />
            </Block>

            <Block>
              <Stacked paddingPos="none">
                <Columns align="center" gap="narrow">
                  <Block width="120px" widthL="90px" widthM="60px" widthS="50px">
                    <Figure src={view.url('images/icon_profile.png')} name="アイコン" />
                  </Block>

                  <Block>
                    <PlainText baseSizeXL="1.5rem" baseSizeM="1.25rem" baseColor={color.gold}>
                      <p>技術・人文知識・国際業務</p>
                    </PlainText>
                  </Block>
                </Columns>
              </Stacked>

              <Stacked paddingPos="top" paddingSize="narrow">
                <Columns gap="normal">
                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0101.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー１</p>
                      </PlainText>
                    </Stacked>
                  </Block>

                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0102.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー２</p>
                      </PlainText>
                    </Stacked>
                  </Block>
                </Columns>
              </Stacked>
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <WithDot>雇用契約を結んでいる限り日本で働き続けることができます。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>在留期間の更新手続きは、特に回数制限は設けられていません。回数を重ねて、日本での就業期間が長くなると、在留期間の長いビザが許可される傾向にあります。10年以上日本に在留していて今後も日本で生活していくのに十分な経済的基盤がある場合は、永住許可申請をして「永住権」を取得することができます。永住許可（永住権）を得ると在留期間の制限がなくなります。職種も制限されずに働くことができます。</p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Columns justify="center">
            <Block width="1000px" maxWidth="100%">
              <Figure name="流れ" src={view.url('images/flow_staff-agency_0103.png')} width="100%" />
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="normal">
          <WithDot>優秀な外国人材の快適な職業生活・社会生活をサポートする定着支援サービス。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>
              在留資格認定証明書交付申請から住居の確保や空港出迎え、また入国後すぐの対応が求められる銀行口座の開設や公的手続きの同行、書類作成補助など。スムーズな就業を実現できるよう、入社後も定期的なフォローアップを行い、貴重な外国人材の定着をサポートします。
            </p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Columns repeat={5} repeatS={3} justify="center" gap="normal">
            <IconText icon={view.url('images/icon_passport.png')} text="入管・公的手続等同行" />
            <IconText icon={view.url('images/icon_japanese.png')} text="日本語レッスン" />
            <IconText icon={view.url('images/icon_tel.png')} text="相談対応" />
            <IconText icon={view.url('images/icon_pazzle.png')} text="日本人との交流" />
            <IconText icon={view.url('images/icon_meeting.png')} text="定期的な面談" />
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="none">
        <Border color={color.gold} height="3px" />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Columns repeat={2} repeatS={1} gap="normal" align="flex-start">
            <Block height="50%" fixRatio>
              <Figure
                name="特定技能"
                src={view.url('images/profile_staff-agency_02.jpg')}
                width="100%"
                height="100%"
              />
            </Block>

            <Block>
              <Stacked paddingPos="none">
                <Columns align="center" gap="narrow">
                  <Block width="120px" widthL="90px" widthM="60px" widthS="50px">
                    <Figure src={view.url('images/icon_profile.png')} name="アイコン" />
                  </Block>

                  <Block>
                    <PlainText baseSizeXL="1.5rem" baseSizeM="1.25rem" baseColor={color.gold}>
                      <p>特定技能</p>
                    </PlainText>
                  </Block>
                </Columns>
              </Stacked>

              <Stacked paddingPos="top" paddingSize="narrow">
                <Columns gap="normal">
                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0201.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー１</p>
                      </PlainText>
                    </Stacked>
                  </Block>

                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0202.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー２</p>
                      </PlainText>
                    </Stacked>
                  </Block>
                </Columns>
              </Stacked>
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <WithDot>特定技能1号・2号合わせて10年間継続雇用が可能です。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>
              受け入れ可能な業種は「特定産業分野」14業種（介護、産業機械製造業、電気・電子情報関連産業、建設業、自動車整備業、宿泊業、農業、飲食料品製造業、外食業、ビルクリーニング、素形材産業など）に制限されています。特定技能2号が修了した後は、今後も日本で生活していくのに十分な経済的基盤がある場合は、永住許可申請をして「永住権」を取得することができます。永住許可（永住権）を得ると在留期間の制限がなくなります。職種も制限されずに働くことができます。
            </p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Columns justify="center">
            <Block width="1000px" maxWidth="100%">
              <Figure name="流れ" src={view.url('images/flow_staff-agency_0203.png')} width="100%" />
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="normal">
          <WithDot>登録支援機関として在留資格申請手続きおよび支援業務の委託・定着支援サービスを行います。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>
              職業生活・日常生活・社会生活上の支援計画の作成サポートから、支援業務委託契約に基づく支援計画の実施まで対応します。
            </p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow" wrap>
          <Columns repeat={5} repeatS={3} gap="normal">
            <IconText icon={view.url('images/icon_guidance.png')} text="事前ガイダンス" />
            <IconText icon={view.url('images/icon_door.png')} text="出入国する際の送迎" />
            <IconText icon={view.url('images/icon_tel.png')} text="住居確保・各種契約支援" />
            <IconText icon={view.url('images/icon_teaching.png')} text="生活オリエンテーション" />
            <IconText icon={view.url('images/icon_passport.png')} text="入管・公的手続等同行" />
            <IconText icon={view.url('images/icon_japanese.png')} text="日本語学習機会の提供" />
            <IconText icon={view.url('images/icon_tel.png')} text="相談・苦情への対応" />
            <IconText icon={view.url('images/icon_pazzle.png')} text="日本人との交流促進" />
            <IconText icon={view.url('images/icon_resume.png')} text="転職支援" />
            <IconText icon={view.url('images/icon_meeting.png')} text="定期的な面談" />
          </Columns>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="none">
        <Border color={color.gold} height="3px" />
      </Stacked>

      <Stacked isSection wrap>
        <Stacked paddingPos="none">
          <Columns repeat={2} repeatS={1} gap="normal" align="flex-start">
            <Block height="50%" fixRatio>
              <Figure
                name="特定技能"
                src={view.url('images/profile_staff-agency_03.jpg')}
                width="100%"
                height="100%"
              />
            </Block>

            <Block>
              <Stacked paddingPos="none">
                <Columns align="center" gap="narrow">
                  <Block width="120px" widthL="90px" widthM="60px" widthS="50px">
                    <Figure src={view.url('images/icon_profile.png')} name="アイコン" />
                  </Block>

                  <Block>
                    <PlainText baseSizeXL="1.5rem" baseSizeM="1.25rem" baseColor={color.gold}>
                      <p>技能実習</p>
                    </PlainText>
                  </Block>
                </Columns>
              </Stacked>

              <Stacked paddingPos="top" paddingSize="narrow">
                <Columns gap="normal">
                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0301.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー１</p>
                      </PlainText>
                    </Stacked>
                  </Block>

                  <Block>
                    <Stacked paddingPos="none">
                      <Figure name="フロー" src={view.url('images/flow_staff-agency_0302.png')} width="120px" />
                    </Stacked>

                    <Stacked paddingPos="top" paddingSize="thin">
                      <PlainText baseSizeXL=".9rem">
                        <p>求人→入社フロー２</p>
                      </PlainText>
                    </Stacked>
                  </Block>
                </Columns>
              </Stacked>
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <WithDot>国際共生事業協同組合（監理団体）が技能実習生の受入をサポートします。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <p>
              提携するベトナム・フィリピンの送出し機関で企業さまのご要望にマッチするす外国人材を現地で募集し、提携する国際共生事業協同組合（監理団体）を通して、候補者としてご紹介いたします。提携する送出し機関と連携して求人票の作成から、母国での日本語教育、職種に合わせた技術的な教育も実施いたします。また、企業の受入準備から実習生の生活サポートまで、円滑な技能実習を支援いたします。
            </p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Columns justify="center">
            <Block width="1000px" maxWidth="100%">
              <Figure name="流れ" src={view.url('images/flow_staff-agency_0303.png')} width="100%" />
            </Block>
          </Columns>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <WithDot>受入企業の常勤職員総数によって、受入可能人数が決められています。</WithDot>
        </Stacked>
        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText>
            <Limitation>
              <table>
                <tbody>
                  <tr>
                    <th>受入企業常勤職員総数</th>
                    <th>30人以下</th>
                    <th>31〜40人</th>
                    <th>41〜50人</th>
                    <th>51〜100人</th>
                    <th>101〜200人</th>
                    <th>201〜300人</th>
                    <th>300人以上</th>
                  </tr>
                  <tr>
                    <th>技能実習１号基本人数枠</th>
                    <td>3人まで</td>
                    <td>4人まで</td>
                    <td>5人まで</td>
                    <td>6人まで</td>
                    <td>10人まで</td>
                    <td>15人まで</td>
                    <td>職員数の20分の1</td>
                  </tr>
                </tbody>
              </table>
            </Limitation>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <WithDot>受入企業と管理団体が有料基準合格者と認定された場合、技能実習1号基本人数枠の2倍まで受入可能となります。</WithDot>
        </Stacked>
      </Stacked>

      <Stacked paddingPos="none">
        <Border color={color.gold} height="3px" />
      </Stacked>

      <Stacked paddingPos="top" wrap isSection>
        <Stacked paddingPos="none">
          <Title05 name="人材紹介サービスの特色" color={color.gold} tag="h2" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <Features />
        </Stacked>
      </Stacked>

      <Stacked wrap isSection>
        <Stacked paddingPos="none">
          <Title05 name="人材紹介料金" color={color.gold} tag="h2" />
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PriceTable name="コンサルティング料（内定・採用報酬）" unit="料金／人（税別）">
            <tr>
              <th rowSpan={4}>外国籍</th>
              <th>特定技能外国人</th>
              <td>想定年収の<strong>12.5%</strong>※</td>
            </tr>
            <tr>
              <th>高度人材（技術・人文知識・国際業務）</th>
              <td rowSpan={3}>想定年収の<strong>20%</strong>※</td>
            </tr>
            <tr>
              <th>定住者・永住者等（就労に関する制限の無い人材）</th>
            </tr>
            <tr>
              <th>留学生（日本国内の大学・短大・専門学校卒業見込み）</th>
            </tr>
            <tr>
              <th rowSpan={2}>日本国籍</th>
              <th>中途</th>
              <td rowSpan={2}>想定年収の<strong>25</strong>%※</td>
            </tr>
            <tr>
              <th>新卒（大学・短大・専門学校卒業見込み）</th>
            </tr>
          </PriceTable>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="thin">
          <PlainText baseFamily={font.sansSerif} baseSizeS=".9rem">
            <p>
              ※想定年収は月額給与×12ヶ月とする。（賞与含まず）<br />
              ※月額給与=基本給＋職務手当＋みなし残業手当＋住宅手当＋その他固定的に毎月支給される手当<br />（但し、交通費は除く）
            </p>
          </PlainText>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PriceTable name="返金規定" unit="料金／人（税別）">
            <tr>
              <th>内定・入社辞退の場合の返金</th>
              <td>コンサルティング料の<strong>100</strong>%</td>
            </tr>
            <tr>
              <th>入社後<strong>30</strong>日以内に求職者自己都合による退職の場合</th>
              <td>コンサルティング料の<strong>80</strong>%</td>
            </tr>
            <tr>
              <th>入社後<strong>60</strong>日以内に求職者自己都合による退職の場合</th>
              <td>コンサルティング料の<strong>50</strong>%</td>
            </tr>
            <tr>
              <th>入社後<strong>90</strong>日以内に求職者自己都合による退職の場合</th>
              <td>コンサルティング料の<strong>20</strong>%</td>
            </tr>
            <tr>
              <th>入社後<strong>91</strong>日目以降の退職（理由を問わず）の場合</th>
              <td>返金なし</td>
            </tr>
          </PriceTable>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PriceTable name="在留資格諸申請取次費用" unit="料金／人（税別）">
            <tr>
              <th>特定技能外国人 在留資格認定証明書交付申請（海外在住）</th>
              <td><strong>150,000</strong>円</td>
            </tr>
            <tr>
              <th>特定技能外国人 在留資格変更許可申請（国内在住）</th>
              <td><strong>150,000</strong>円</td>
            </tr>
            <tr>
              <th>高度人材（技・人・国）在留資格認定証明書交付申請（海外在住）</th>
              <td><strong>100,000</strong>円</td>
            </tr>
          </PriceTable>
        </Stacked>

        <Stacked paddingPos="top" paddingSize="narrow">
          <PriceTable name="外国人材向け職業生活・社会生活サポートサービス" unit="料金／人（税別）">
            <tr>
              <th>定着支援料</th>
              <td><strong>15,000</strong>円</td>
            </tr>
            <tr>
              <td className="note" colSpan={2}>・上司や雇用先の代表者等との月１回の定期的面談の実施・公的手続きへの同行、書類作成の補助・外国人への日本語講習機会の提供・生活に関する相談又は苦情への対応・日本人との交流促進に係る下記の支援・転職支援（人員整理等の場合）</td>
            </tr>
          </PriceTable>
        </Stacked>
      </Stacked>
    </Page>
  );
};

const Limitation = styled.div`
  position: relative;
  width: 100%;
  overflow: scroll;

table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

tr {
  border-top: 1px solid ${color.gold};

  &:last-child {
    border-bottom: 1px solid ${color.gold};
  }

  &:first-child {
    background-color: ${rgba(color.gold, .3)};
  }
}

th {
  &:first-child {
    font-weight: 700;
  }
}

th, td {
  padding: .5rem;
  text-align: center;
  border-left: 1px solid ${color.gold};
  line-height: 1.5;

  &:last-child {
    border-right: 1px solid ${color.gold};
  }
}

@media only screen and (max-width: ${screen.m}px) {
  table {
    min-width: 900px;
    border-collapse: collapse;
  }

  th, td {
    font-size: .9rem;
  }
}

@media only screen and (max-width: ${screen.s}px) {
  table {
    min-width: 680px;
    border-collapse: collapse;
  }

  th, td {
    font-size: .8rem;
  }
}
`;

const WithDot = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-family: ${font.sansSerif};

  &::before {
    content: '●';
    margin-right: .25rem;
    color: ${color.gold};
    font-size: 2rem;
  }
`;

export default ServicePage;
