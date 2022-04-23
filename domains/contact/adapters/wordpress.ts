import axios from 'axios';
import { InputContact } from '../entities/contact';

export async function createContact(input: InputContact) {
  const data = new FormData();
  data.set('your-kind', input.kind);
  data.set('your-name', input.name);
  if(input.company) data.set('your-company', input.company);
  if(input.tel) data.set('your-tel', input.tel);
  data.set('your-email', input.email);
  data.set('your-content', input.content);

  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_CONTACT_FORM_ID}/feedback`, {
      method: 'POST',
      data
    });
  } catch(e: any) {
    throw new Error(`${e.response?.status | 500}: ${e.message}`);
  }

  if(res.data.status !== 'mail_sent') {
    throw new Error(res.data.status);
  }
}
