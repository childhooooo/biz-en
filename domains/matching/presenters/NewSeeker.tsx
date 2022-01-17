import styled from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTable } from 'components/block';

import { view } from 'unflexible-ui';
import { Education, EducationKindValues, Qualification, QualificationKindValues, JLPT, JLPTKindValues } from 'domains/matching';

interface Props {
}

interface InputSeeker {
  name: string;
  kana: string;
  birthday: string;
  sex: number;
  postalcode: string;
  address: string;
  email: string;
  reEmail: string;
  nationality: string;
  education: number;
  educationKind: number;
  educationSchool: string;
  qualification: number;
  jlpt: number;
  acceptEmail: number;
  password: string;
}

const NewSeeker = ({}: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputSeeker>();
  const onSubmit: SubmitHandler<InputSeeker> = data => console.log(data);

  return (
    <Component>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTable>
          <thead>
            <tr>
              <th>プロフィール</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="required">氏名</th>
              <td>
                <input type="text" {...register("name", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">氏名（カタカナ）</th>
              <td>
                <input type="text" placeholder="カタカナを入力" {...register("kana", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">生年月日</th>
              <td>
                <input defaultValue="2000-01-01" {...register("birthday", { required: true })} type="date" />
              </td>
            </tr>

            <tr>
              <th className="required">性別</th>
              <td className="radio">
                <ul>
                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-male"
                      type="radio"
                      checked
                    />
                    <label htmlFor="sex-male">男性</label>
                  </li>

                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-female"
                      type="radio"
                    />
                    <label htmlFor="sex-female">女性</label>
                  </li>

                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-others"
                      type="radio"
                    />
                    <label htmlFor="sex-others">その他</label>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <th className="required">現住所</th>
              <td>
                <p>
                  <span className="inline-label">〒</span>
                  <input type="text" className="short" {...register("postalcode", { required: true })} /><br/>
                </p>
                <p>
                  <input type="text" className="full" {...register("address", { required: true })} />
                </p>
              </td>
            </tr>

            <tr>
              <th className="required">メールアドレス</th>
              <td>
                <p>
                  <input type="email" {...register("email", { required: true })} />
                </p>
                <p>
                  <input type="email" placeholder="もう一度入力してください" {...register("reEmail", { required: true })} />
                </p>
              </td>
            </tr>

            <tr>
              <th className="required">ご希望のパスワード</th>
              <td>
                <input type="password" placeholder="6〜32文字で半角英数字と記号が使用可" {...register("password", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">国籍・学歴</th>
              <td>
                <p>
                  <span className="inline-label">国籍</span>
                  <input type="text" className="semishort" placeholder="日本" {...register("nationality", { required: true })}/>
                </p>
                <p className="radio nowrap">
                  <span className="inline-label">学歴</span>
                  <div className="select">
                    <select id="education" defaultValue="" {...register("education", { required: true })}>
                      <option value="" selected disabled>選択してください</option>
                        {EducationKindValues.map(v => {
                          const label = Education.fromNumber(v)?.toString() || null;
                          if(label !== null) {
                            return <option value={v}>{label}</option>;
                          }
                        })}
                    </select>
                  </div>
                  <ul>
                    <li>
                      <input
                        {...register("educationKind", { required: true })}
                        id="education-kind-guraduated"
                        type="radio"
                        checked
                      />
                      <label htmlFor="education-kind-guraduated">既卒</label>
                    </li>
                    <li>
                      <input
                        {...register("educationKind", { required: true })}
                        id="education-kind-larning"
                        type="radio"
                      />
                      <label htmlFor="education-kind-larning">在学中</label>
                    </li>
                  </ul>
                </p>
                <p>
                  <input type="text" placeholder="学校名を記入してください" {...register("educationSchool", { required: true })} />
                </p>
              </td>
            </tr>

            <tr>
              <th className="required">
                <label htmlFor="qualification">在留資格</label>
              </th>
              <td>
                <div className="select">
                  <select id="qualification" defaultValue="" {...register("qualification", { required: true })}>
                    <option value="">選択してください</option>
                    {QualificationKindValues.map(v => {
                      const label = Qualification.fromNumber(v)?.toString() || null;
                      if(label !== null) {
                        return <option value={v}>{label}</option>
                      }
                    })}
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <th className="">
                <label htmlFor="jlpt">日本語能力試験 JLPT</label>
              </th>
              <td>
                <div className="select">
                  <select id="jlpt" defaultValue="" {...register("jlpt")}>
                    <option value="">選択してください</option>
                    {JLPTKindValues.map(v => {
                      const label = JLPT.fromNumber(v)?.toString() || null;
                      if(label !== null) {
                        return <option value={v}>{label}</option>
                      }
                    })}
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <th>求人情報メール配信</th>
              <td className="radio">
                <ul>
                  <li>
                    <input id="accept-email-yes" type="radio" {...register("acceptEmail")} />
                    <label htmlFor="accept-email-yes">利用する</label>
                  </li>

                  <li>
                    <input id="accept-email-no" type="radio" {...register("acceptEmail")} />
                    <label htmlFor="accept-email-no">利用しない</label>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </FormTable>

        <p className="note">携帯キャリアのメールアドレスをご利用の場合は、「@shuushoku-shien.co.jp」からのメール受信許可に設定してください。</p>

        <p className="confirmation">
          <a href={view.url('')}>会員規約と個人情報の取り扱い</a>に同意した上で会員登録をしてください。
        </p>

        <input type="submit" value="同意して会員登録" />
      </form>
    </Component>
  );
};

const Component = styled.div`
  .note {
    margin-top: 3rem;
    font-size: .9rem;

  &:before {
    content: '※';
    }
}

.confirmation {
  margin-top: 2rem;
  text-align: center;

  a {
    color: var(--marine-blue);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      }
    }
}

input[type="submit"] {
  display: block;
  width: 400px;
  margin: 1.5rem auto 0 auto;
  padding: .5rem;
  font-size: 1.25rem;
  color: var(--white);
  background-color: var(--marine-blue);
  text-align: center;
  border-radius: 15px;
}
`

export default NewSeeker;
