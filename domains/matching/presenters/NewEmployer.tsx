import styled from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTable } from 'components/block';

import { useRouter } from 'next/router';
import { view } from 'unflexible-ui-legacy';
import { color, screen } from 'lib/config';
import { InputEmployer, getEmployerByEmail, notifyNewEmployer } from 'domains/matching';

interface Props {
}

const NewEmployer = ({ }: Props) => {
  const router = useRouter();
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm<InputEmployer>();
  const onSubmit: SubmitHandler<InputEmployer> = async (data) => {
    let result;
    try {
      const res = await fetch('/api/matching/employer/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    } catch (e: any) {
      alert('何か問題が発生しました。もう一度お試しください。');
      reset();
      return;
    }

    try {
      notifyNewEmployer(InputEmployer.fromObject(data));
    } catch {
      console.log('Failed to send mail');
    }

    router.push(view.url('service/matching/employer/registered'));
  };

  return (
    <Component>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTable>
          <thead>
            <tr>
              <th>基本情報</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="required">企業名</th>
              <td>
                <input type="text" className="full" {...register("companyName", { required: true })} />
                {errors.companyName && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">企業名（カタカナ）</th>
              <td>
                <input type="text" className="full" placeholder="カナ入力" {...register("companyKana", { required: true })} />
                {errors.companyKana && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th>ホームページ URL</th>
              <td>
                <input type="text" className="full" {...register("website")} /><br />
              </td>
            </tr>

            <tr>
              <th className="required">所属部署名</th>
              <td>
                <input type="text" className="full" {...register("department", { required: true })} />
                {errors.department && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">ご担当者氏名</th>
              <td>
                <ul>
                  <li>
                    <label htmlFor="last-name" className="inline-label">氏</label>
                    <input type="text" id="last-name" className="short" {...register("lastName", { required: true })} />
                  </li>
                  <li>
                    <label htmlFor="first-name" className="inline-label">名</label>
                    <input type="text" id="first-name" className="short" {...register("firstName", { required: true })} />
                  </li>
                </ul>
                {(errors.lastName || errors.firstName) && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">メールアドレス</th>
              <td>
                <div>
                  <input type="email" {...register("email", {
                    required: true, validate: async (v: string) => {
                      const employer = await getEmployerByEmail(v);
                      console.log(employer);
                      return employer === null;
                    }
                  })} />
                  {errors.email?.type === 'required' && <p className="error">正しく入力してください</p>}
                  {errors.email && errors.email?.type !== 'required' && <p className="error">既に使用されています</p>}
                </div>
                <div>
                  <input type="email" placeholder="もう一度入力してください" {...register("reEmail", { required: true, validate: (v: string) => v === getValues('email') })} />
                  {errors.reEmail && <p className="error">正しく入力してください</p>}
                </div>
              </td>
            </tr>

            <tr>
              <th className="required">電話番号</th>
              <td>
                <input type="tel" {...register("tel", { required: true })} />
                {errors.tel && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">募集職種</th>
              <td>
                <textarea rows={5} {...register("requiredOccupation", { required: true })} />
                {errors.requiredOccupation && <p className="error">正しく入力してください</p>}
              </td>
            </tr>

            <tr>
              <th className="required">勤務場所</th>
              <td>
                <input type="text" {...register("workAt", { required: true })} />
                {errors.workAt && <p className="error">正しく入力してください</p>}
              </td>
            </tr>
          </tbody>
        </FormTable>

        <p className="confirmation">
          <a href={view.url('privacy-policy')} target="_blank">個人情報の取り扱い</a>に同意した上で送信してください。
        </p>

        <input type="submit" value="同意して送信する" />
      </form>
    </Component>
  );
};

const Component = styled.div`
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

export default NewEmployer;
