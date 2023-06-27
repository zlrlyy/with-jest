//创建一个函数取一个字符串在最后一个字母 / 之前的内容
export function getStrBeforeLastSlash(str: string): string {
  const index = str.lastIndexOf('/');
  return str.slice(0, index);
}
