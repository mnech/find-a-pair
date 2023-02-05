import { Regexp } from '../consts';

export const regexpTest = (type: keyof typeof Regexp, str: string) => {
  return Regexp[type].test(str);
};
