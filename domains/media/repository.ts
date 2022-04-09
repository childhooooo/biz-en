import * as WordPress from './adapters/wordpress';
import { Media } from './entities/media';

export async function getMedia(id: number): Promise<Media> {
  return WordPress.getMedia(id);
}
