import { FormTable } from 'components/container';

import styled from 'styled-components';
import { darken } from 'polished';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSeekerAuthState } from '../presenters/SeekerAuthState';
import { view } from 'unflexible-ui-legacy';
import { color } from 'lib/config';
import { EditType } from '../entities/editRequest';

export class Fields {
  constructor(
    public readonly useId: string,
    public readonly editType: EditType,
    public readonly content: string
  ) {}
}

interface Props {
}

const EditUser = ({}: Props) => {
  const seekerAuthState = useSeekerAuthState();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Fields>();

  const onSubmit: SubmitHandler<Fields> = async (input: any) => {
  }

  return (
    <Component onSubmit={handleSubmit(onSubmit)}>
      <FormTable>
        <tr className="required">
          <th>申請内容</th>
          <td>
            <ul className="radio-group">
              {EditType.all().map((e: EditType) => {
                return (
                  <li>
                    <input id={`edit-${e.kind}`} type="radio" value={e.kind} {...register('editType')} />
                    <label htmlFor={`edit-${e.kind}`}>{e.toString()}</label>
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>

        <tr>
          <th>変更内容</th>
          <td>
            <textarea
              id="edit-content"
              placeholder="登録情報の変更を申請する場合のみ記入してください"
              rows={10}
            />
          </td>
        </tr>

        <tr>
          <td colSpan={2}>
            <Submit>
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
`;

export default EditUser;
