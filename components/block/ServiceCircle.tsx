import styled from 'styled-components';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';

const Circle = ({ name, en, href }: CircleProps) => {
  return (
    <CircleComponent href={href}>
      <p dangerouslySetInnerHTML={{ __html: en }} />
      <h3 dangerouslySetInnerHTML={{ __html: name }} />
    </CircleComponent>
  );
};

const CircleComponent = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 10px solid ${color.pinkPurple};
  text-decoration: none;
  background-color: ${color.white};
  box-shadow: inset 0px 16px 12px rgba(0, 0, 0, .15);
  transition-duration: .3s;

  &:hover {
    background-color: ${color.lightPurple};

    p, h3 {
      color: ${color.white};
    }
  }

  p, h3 {
    transition-duration: .3s;
  }

  p {
    color: ${color.darkGray};
    font-size: 1.75rem;
    text-align: center;
    line-height: 1.25;

    small {
      display: block;
      font-size: 1rem;
    }
  }

  h3 {
    margin-top: 1rem;
    color: ${color.purple};
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
  }
`;

interface Props {
}

const SeriveCircle = ({}: Props) => {
  return (
    <Component>
      <div>
        <ul>
          <li>
            <Circle
              name="技術・人文知識<br/>国際業務"
              en="ESI<br/><small>Engineer/<br/>Specialist in Humanities/<br/>International Services</small>"
              href="#service_01"
            />
          </li>

          <li>
            <Circle
              name="特定技能"
              en="Specified<br/>Skilled Worker"
              href="#service_02"
            />
          </li>

          <li>
            <Circle
              name="インターンシップ"
              en="Designed<br/>Activities<br/>(Internship)"
              href="#service_03"
            />
          </li>

          <li>
            <Circle
              name="技能実習"
              en="Technical<br/>intern training"
              href="#service_04"
            />
          </li>

          <li>
            <Circle
              name="留学"
              en="Student"
              href="#service_05"
            />
          </li>
        </ul>
      </div>
    </Component>
  );
};

const Component = styled.div`
  position: relative;
  width: 840px;
  max-width: 90vw;

  &:before {
    position: relative;
    content: '';
    display: block;
    padding-top: 100%;
  }

  > div {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background-image: url(${view.url('images/circle_service.png')});
    background-size: contain;
    background-position: 100% 50%;
  }

  ul {
    list-style: none;
  }

  li {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }

  li:nth-child(1) {
    top: 3%;
    left: 65%;
  }

  li:nth-child(2) {
    top: 50%;
    left:100%;
  }

  li:nth-child(3) {
    top: 95%;
    left: 66%;
  }

  li:nth-child(4) {
    top: 75%;
    left: 10%;
  }

  li:nth-child(5) {
    top: 20%;
    left: 9%;
  }
`

interface CircleProps {
  name: string;
  en: string;
  href: string;
}

export default SeriveCircle;
