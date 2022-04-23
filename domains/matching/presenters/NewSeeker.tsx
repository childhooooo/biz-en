import styled from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTable } from 'components/block';

import { useRouter } from 'next/router';
import { view } from 'unflexible-ui-legacy';
import { color, screen } from 'lib/config';
import {
  Education, EducationKindValues, Qualification, QualificationKindValues, JLPT, JLPTKindValues, InputSeeker,
  getSeekerByEmail, notifyNewSeeker
} from 'domains/matching';

interface Props {
}

const NewSeeker = ({ }: Props) => {
  const router = useRouter();
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm<InputSeeker>({
    defaultValues: {
      sex: 'male',
      educationState: 'guraduated',
      acceptEmail: 'yes'
    }
  });
  const onSubmit: SubmitHandler<InputSeeker> = async data => {
    let res;
    try {
      res = await fetch('/api/matching/seeker/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    } catch (e: any) {
      alert('何か問題が発生しました。もう一度お試しください。');
      reset();
      return;
    }

    try {
      notifyNewSeeker(InputSeeker.fromObject(data));
    } catch {
      console.log('Failed to send mail')
    }

    router.push(view.url('service/matching/seeker/registered'));
  };

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
                {errors.name && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">氏名（カタカナ）</th>
              <td>
                <input type="text" placeholder="カタカナを入力" {...register("kana", { required: true })} />
                {errors.kana && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">生年月日</th>
              <td>
                <input className="short" defaultValue="2000-01-01" {...register("birthday", { required: true })} type="date" />
                {errors.birthday && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">性別</th>
              <td>
                <ul className="radio">
                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-male"
                      type="radio"
                      value={'male'}
                      defaultChecked
                    />
                    <label htmlFor="sex-male">男性</label>
                  </li>

                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-female"
                      type="radio"
                      value={'female'}
                    />
                    <label htmlFor="sex-female">女性</label>
                  </li>

                  <li>
                    <input
                      {...register("sex", { required: true })}
                      id="sex-others"
                      type="radio"
                      value={'others'}
                    />
                    <label htmlFor="sex-others">その他</label>
                  </li>
                </ul>
                {errors.sex && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">現住所</th>
              <td>
                <div>
                  <span className="inline-label">〒</span>
                  <input type="text" className="short" {...register("postalcode", { required: true })} /><br />
                </div>
                <div>
                  <input type="text" className="full" {...register("address", { required: true })} />
                </div>
                {(errors.postalcode || errors.address) && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">メールアドレス</th>
              <td>
                <div>
                  <input type="email" autoComplete="email" {...register("email", {
                    required: true, validate: async (v: string) => {
                      const seeker = await getSeekerByEmail(v);
                      return seeker === null;
                    }
                  })} />
                  {errors.email?.type === 'required' && <p className="error">正しく入力してください</p>}
                  {errors.email && errors.email?.type !== 'required' && <p className="error">既に使用されています</p>}
                </div>
                <div>
                  <input type="email" placeholder="もう一度入力してください" autoComplete="email" {...register("reEmail", { required: true, validate: (v: string) => v === getValues('email') })} />
                  {errors.reEmail && <p className="error">正しく入力してください</p>}
                </div>
              </td>
            </tr>

            <tr>
              <th className="required">ご希望のパスワード</th>
              <td>
                <input type="password" placeholder="6〜32文字で半角英数字と記号が使用可" autoComplete="new-password" {...register("password", { required: true, minLength: 6, maxLength: 32, pattern: /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/ })} />
                {errors.password?.type === 'required' && <p className="error">正しく入力してください</p>}
                {errors.password?.type === 'minLength' && <p className="error">6文字以上で入力してください</p>}
                {errors.password?.type === 'maxLength' && <p className="error">32文字以下で入力してください</p>}
                {errors.password?.type === 'pattern' && <p className="error">使えない文字が含まれています</p>}
              </td>
            </tr>

            <tr>
              <th className="required">国籍・学歴</th>
              <td>
                <div>
                  <span className="inline-label">国籍</span>
                  <input type="text" className="semishort" placeholder="日本" {...register("nationality", { required: true })} />
                  {errors.nationality && <p className="error">正しく入力してください</p>}
                </div>
                <ul>
                  <li className="nowrap">
                    <span className="inline-label">学歴</span>
                    <div className="select">
                      <select id="education" defaultValue="" {...register("education", { required: true })}>
                        <option value="" disabled>選択してください</option>
                        {EducationKindValues.map((v: string, index: number) => {
                          const label = Education.fromSlug(v)?.toString() || null;
                          if (label !== null) {
                            return <option value={v} key={index}>{label}</option>;
                          }
                        })}
                      </select>
                    </div>
                  </li>
                  <li>
                    <ul className="radio">
                      <li>
                        <input
                          {...register("educationState", { required: true })}
                          id="education-state-guraduated"
                          type="radio"
                          value={'guraduated'}
                          defaultChecked
                        />
                        <label htmlFor="education-state-guraduated">既卒</label>
                      </li>
                      <li>
                        <input
                          {...register("educationState", { required: true })}
                          id="education-state-larning"
                          type="radio"
                          value={'larning'}
                        />
                        <label htmlFor="education-state-larning">在学中</label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div>
                  <input type="text" placeholder="学校名を記入してください" {...register("educationSchool", { required: true })} />
                  {(errors.education || errors.educationState || errors.educationSchool) && <p className="error">正しく入力してください</p>}
                </div>
              </td>
            </tr>

            <tr>
              <th className="required">
                <label htmlFor="qualification">在留資格</label>
              </th>
              <td>
                <div className="select">
                  <select id="qualification" defaultValue="" {...register("qualification", { required: true })}>
                    <option value="" disabled>選択してください</option>
                    {QualificationKindValues.map((v: string, index: number) => {
                      const label = Qualification.fromSlug(v)?.toString() || null;
                      if (label !== null) {
                        return <option value={v} key={index}>{label}</option>
                      }
                    })}
                  </select>
                </div>
                {errors.qualification && <p className="error">正しく入力してください</p>}
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
                    {JLPTKindValues.map((v: string, index: number) => {
                      const label = JLPT.fromSlug(v)?.toString() || null;
                      if (label !== null) {
                        return <option value={v} key={index}>{label}</option>
                      }
                    })}
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <th>求人情報メール配信</th>
              <td>
                <ul className="radio">
                  <li>
                    <input id="accept-email-yes" type="radio" value="yes" defaultChecked {...register("acceptEmail")} />
                    <label htmlFor="accept-email-yes">利用する</label>
                  </li>

                  <li>
                    <input id="accept-email-no" type="radio" value="no" {...register("acceptEmail")} />
                    <label htmlFor="accept-email-no">利用しない</label>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </FormTable>

        <p className="note">携帯キャリアのメールアドレスをご利用の場合は、「@shuushoku-shien.co.jp」からのメール受信許可に設定してください。</p>

        <p className="confirmation">
          <a href={view.url('privacy-policy')} target="_blank">会員規約と個人情報の取り扱い</a>に同意した上で会員登録をしてください。
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
    color: ${color.marineBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      }
    }
}

input[type="submit"] {
  display: block;
  width: 400px;
  max-width: 100%;
  margin: 1.5rem auto 0 auto;
  padding: .5rem;
  font-size: 1.25rem;
  color: ${color.white};
  background-color: ${color.marineBlue};
  text-align: center;
  border-radius: 15px;

  @media only screen and (max-width: ${screen.xs}px) {
    font-size: 1rem;
  }
}
`

export default NewSeeker;
