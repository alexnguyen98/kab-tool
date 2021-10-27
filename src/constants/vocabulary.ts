export const LETTER_LENGTH = 26;

export const letterFrequency: { [key: string]: number } = {
  a: 0.08,
  b: 0.01,
  c: 0.03,
  d: 0.04,
  e: 0.13,
  f: 0.02,
  g: 0.02,
  h: 0.06,
  i: 0.07,
  j: 0.0,
  k: 0.01,
  l: 0.04,
  m: 0.02,
  n: 0.07,
  o: 0.08,
  p: 0.02,
  q: 0.0,
  r: 0.06,
  s: 0.06,
  t: 0.09,
  u: 0.03,
  v: 0.01,
  w: 0.02,
  x: 0.0,
  y: 0.02,
  z: 0.0,
};

export const letterFrequencyArr = Object.values(letterFrequency);

export const abcdArr = Object.keys(letterFrequency);
