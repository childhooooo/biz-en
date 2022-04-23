import { FormTable } from 'components/block';

import styled from 'styled-components';
import { darken } from 'polished';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { view } from 'unflexible-ui-legacy';
import { color, screen } from 'lib/config';
import { InputEditRequest, EditType } from '../entities/editRequest';
import { Seeker } from '../entities/seeker';
import { notifyNewEditRequest } from '../usecase';

interface Props {
  seeker: Seeker;
}

const NewEditRequestForm = ({ seeker }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InputEditRequest>({
    defaultValues: {
      seekerId: seeker.id,
      title: `${seeker.name}さんからの編集依頼`
    }
  });

  const onSubmit: SubmitHandler<InputEditRequest> = async (input) => {
    try {
      const res = await fetch('/api/matching/edit-request/', {
        method: 'POST',
        body: JSON.stringify(input),
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
      notifyNewEditRequest({
        email: seeker.email,
        name: seeker.name,
        kind: EditType.fromSlug(input.editType),
        details: input.content
      });
    } catch(e) {
      console.log('Failed to send mail');
    }

    router.push(view.url(`service/matching/seeker/edit-request/complete?type=${input.editType}`));
  };

  return (
    <Component onSubmit={handleSubmit(onSubmit)}>
      <input type="number" hidden {...register('seekerId', { required: true })} />
      <input type="text" hidden {...register('title', { required: true })} />
      <FormTable>
        <tr className="required">
          <th>申請内容</th>
          <td>
            <ul className="radio">
              {EditType.all().map((e: EditType, index: number) => {
                return (
                  <li key={index}>
                    <input id={`edit-${e.kind}`} type="radio" value={e.kind} {...register('editType', { required: true })} />
                    <label htmlFor={`edit-${e.kind}`}>{e.toString()}</label>
                  </li>
                );
              })}
            </ul>
            {errors.editType && <p className="error">選択してください</p>}
          </td>
        </tr>

        <tr>
          <th>変更内容</th>
          <td>
            <textarea
              id="edit-content"
              placeholder="登録情報の変更を申請する場合のみ記入してください"
              rows={10}
              {...register('content')}
            />
          </td>
        </tr>

        <tr>
          <td colSpan={2}>
            <Submit type="submit">
              <img src={view.url('images/icon_mail_white.png')} alt="アイコン" />
              <span>送信する</span>
            </Submit>
          </td>
        </tr>
      </FormTable>
    </Component>
  );
};

const Component = styled.form`
`

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  padding: .75rem;
  background-color: ${color.marineBlue};
  border-radius: 15px;
  transition-duration: .3s;

  &:hover {
    background-color: ${darken(.05, color.marineBlue)};
  }

  img {
    width: auto;
    height: 1.5rem;
  }

  span {
    margin-left: .75rem;
    font-size: 1rem;
    color: ${color.white};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: 100%;
  }
`;

export default NewEditRequestForm;
