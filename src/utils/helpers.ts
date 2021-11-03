import { LETTER_LENGTH } from '../constants/vocabulary';

export const getMultiplicativeInverse = (a: number) => {
  let flag = 0;
  for (let i = 0; i < LETTER_LENGTH; i++) {
    flag = (a * i) % LETTER_LENGTH;
    if (flag === 1) {
      return i;
    }
  }
  throw new Error();
};
