import axios from 'axios';
import { Media } from '../entities/media';

export function wpToMedia(obj: any): Media {
  return Media.fromObject({
    id: obj.id,
    name: obj.title.rendered,
    mimeType: obj.mime_type,
    url: obj.source_url
  });
}

export async function getMedia(id: number): Promise<Media> {
  let res;
  try {
    res = await axios(`${process.env.NEXT_PUBLIC_API_BASE}/wp/v2/media/${id}`);
  } catch(e: any) {
    throw new Error(`${e.response?.status || 500}: ${e.message}`);
  }

  return wpToMedia(res.data);
}
