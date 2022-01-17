import styled from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTable } from 'components/block';

import { view } from 'unflexible-ui';

interface Props {
}

interface InputEmployer {
  companyName: string;
  companyKana: string;
  website: string;
  department: string;
  lastName: string;
  firstName: string;
  email: string;
  reEmail: string;
  tel: string;
  requiredOccupation: string;
  workAt: string;
}

const NewEmployer = ({}: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputEmployer>();
  const onSubmit: SubmitHandler<InputEmployer> = data => console.log(data);

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
              </td>
            </tr>

            <tr>
              <th className="required">企業名（カタカナ）</th>
              <td>
                <input type="text" className="full" placeholder="カナ入力" {...register("companyKana", { required: true })} />
              </td>
            </tr>

            <tr>
              <th>ホームページ URL</th>
              <td>
                <input type="text" className="full" {...register("website")} /><br/>
              </td>
            </tr>

            <tr>
              <th className="required">所属部署名</th>
              <td>
                <input type="text" className="full" {...register("department", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">ご担当者氏名</th>
              <td>
                <label htmlFor="last-name" className="inline-label">氏</label>
                <input type="text" id="last-name" className="short" {...register("lastName", { required: true })} />
                <label htmlFor="first-name" className="inline-label">名</label>
                <input type="text" id="first-name" className="short" {...register("firstName", { required: true })} />
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
              <th className="required">電話番号</th>
              <td>
                <input type="tel" {...register("tel", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">募集職種</th>
              <td>
                <textarea {...register("requiredOccupation", { required: true })} />
              </td>
            </tr>

            <tr>
              <th className="required">勤務場所</th>
              <td>
                <input type="text" {...register("workAt", { required: true })} />
              </td>
            </tr>
          </tbody>
        </FormTable>

        <p className="confirmation">
          <a href={view.url('')}>個人情報の取り扱い</a>に同意した上で送信してください。
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

export default NewEmployer;
