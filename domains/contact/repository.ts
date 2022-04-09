import * as WordPress from './adapters/wordpress';
import { InputContact } from './entities/contact';

export async function createContact(input: InputContact) {
  return WordPress.createContact(input);
}
