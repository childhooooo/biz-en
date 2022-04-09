import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font, screen } from 'lib/config';

interface Props {
}

const Features = ({ }: Props) => {
  return (
    <Component>
      <Header>
        <img src={view.url('images/icon_quote_gold_01.png')} alt="" />
        <span>日本で働く外国人材と受入企業さまの幸せになれるよう誠実に向き合っています</span>
        <img src={view.url('images/icon_quote_gold_02.png')} alt="" />
      </Header>

      <Body>
        <ul>
          <li>採用できるまで何人でも紹介を無料で受けられます。</li>
          <li>国内在住の場合、採用が決まるまでは料金はかかりません。初期費用0円、完全前成功報酬型です。</li>
          <li>入社後の退職については採用報酬（手数料）返金制度で安心です。</li>
          <li>求人作成、面接の日程調整、合否連絡などの採用業務を代行します。</li>
        </ul>
      </Body>
    </Component>
  );
};

const Component = styled.div`
padding: 2rem;
background-color: ${color.lightGray};

@media only screen and (max-width: ${screen.s}px) {
  padding: 1.5rem;
}
`;

const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;

img {
  width: 30px;
  height: 24px;
}

span {
  margin: 0 .5rem;
  color: ${color.gold};
  font-size: 1.5rem;
  font-family: ${font.sansSerif};
}

@media only screen and (max-width: ${screen.m}px) {
  img {
    width: 27px;
    height: 21px;
  }

  span {
    font-size: 1.25rem;
  }
}

@media only screen and (max-width: ${screen.s}px) {
  img {
    width: 22px;
    height: 17px;
  }

  span {
    font-size: 1rem;
  }
}
`;

const Body = styled.div`
margin-top: 1rem;

li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25rem 0;
  font-family: ${font.sansSerif};

  &::before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: .5rem;
    background-image: url(${view.url('images/icon_check.png')});
    background-size: contain;
  }
}

@media only screen and (max-width: ${screen.m}px) {
  li {
    font-size: .9rem;

    &::before {
      width: 15px;
      height: 15px;
    }
  }
}
`;

export default Features;
