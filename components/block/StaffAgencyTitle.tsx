import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color, font } from 'lib/config';

interface Props {
}

const StaffAgencyTitle = ({ }: Props) => {
  return (
    <Component>
      <Background>
        <img
          src={view.url('images/mv_staff-agency@1500.jpg')}
          srcSet={`${view.url('images/mv_staff-agency@2000.jpg')} 2000w, ${view.url('images/mv_staff-agency@1500.jpg')} 1500w, ${view.url('images/mv_staff-agency@1250.jpg')} 1250w, ${view.url('images/mv_staff-agency@750.jpg')} 750w`}
          alt="外国人材紹介サービス"
        />
      </Background>

      <Foreground>
        <div>
          <h2>地域産業に外国人材パワーを提供<br />初期費用0円の外国人材紹介サービス</h2>
          <p>
            採用が成功するまで料金はかかりません。<br />
            低リスクで効率的な採用活動を実現できます。<br />
            専門性の高い人材から工場や現場で働く若年層の人材まで、<br />
            外国人材の多様な求人ニーズに対応いたします。
          </p>
        </div>
      </Foreground>
    </Component>
  );
};

const Component = styled.div`
  border-bottom: 3px solid ${color.gold};
`

const Background = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    padding-top: 30%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  z-index: 2;

 > div {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 45%;
   height: 100%;
 }

  h2 {
    color: ${color.gold};
    font-family: ${font.sansSerif};
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    font-family: ${font.sansSerif};
    font-size: 1.5rem;
    line-height: 1.75;
  }
`;

export default StaffAgencyTitle;
