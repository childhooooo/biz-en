export function nl2br(str: string) {
  // let res = str.replace(/\r\n/g, '<br/>');
  let res = str.replace(/\n/g, '<br/>');
  return res;
}
