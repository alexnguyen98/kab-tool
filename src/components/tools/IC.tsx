// @ts-nocheck
import React, { useEffect } from 'react';
import { abcdArr, LETTER_LENGTH } from '../../constants/vocabulary';
import { useGlobalContext } from '../../context/ManagedContext';
import { useDebounce } from '../../hooks/useDebounce';

const IC: React.FC = () => {
  const { input, ic, setIC } = useGlobalContext();
  const debouncedInput = useDebounce(input.replace(/\s/g, ''), 1000);

  useEffect(() => {
    if (!debouncedInput.length) return;

    const N = debouncedInput.length;
    const freqs = {};
    let sum = 0;
    let ic = 0;

    for (let i = 0; i < debouncedInput.length; i++) {
      if (!freqs[debouncedInput[i]]) {
        freqs[debouncedInput[i]] = 1;
      } else {
        freqs[debouncedInput[i]] += 1;
      }
    }

    for (let i = 0; i < LETTER_LENGTH; i++) {
      const f = freqs[abcdArr[i]];
      if (f) {
        sum += f * (f - 1);
      }
    }

    ic = sum / (N * (N - 1));

    console.log(ic, sum, freqs);

    if (ic) setIC(ic);
  }, [debouncedInput]);

  return (
    <li className="my-2 mx-1">
      <div className="text-sm text-green-900 bg-green-100 border-green-100 border-2 capitalize px-3 py-1 rounded-full">
        IC: {ic?.toFixed(5)}
      </div>
    </li>
  );
};

export default IC;
