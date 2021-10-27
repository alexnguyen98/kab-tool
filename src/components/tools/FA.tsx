import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { abcdArr, letterFrequencyArr, LETTER_LENGTH } from '../../constants/vocabulary';
import Button from '../common/Button';
import { useGlobalContext } from '../context/ManagedContext';
import ArrowLeft from '../icons/ArrowLeft';

// const data: { [key: string]: number } = {
//   a: 0.02,
//   b: 0.05,
//   c: 0.03,
// };

type Data = { [key: string]: number };

const FA: React.FC = () => {
  const { input } = useGlobalContext();
  const [shift, setShift] = useState(0);

  const generateDataStats = (): Data => {
    if (!input.trim().length) return {};

    const freq: Data = {};

    input
      .trim()
      .split('')
      .forEach((i: string) => {
        const letter = i.toLowerCase();
        if (freq[letter]) {
          freq[letter]++;
        } else {
          freq[letter] = 1;
        }
      });
    Object.keys(freq).forEach((i) => {
      freq[i] = freq[i] / input.trim().length;
    });

    return freq;
  };

  const generateData = () => {
    const data = generateDataStats();
    let processData = abcdArr.map((i) => (data[i] ? data[i] : 0));

    if (shift) {
      processData = processData
        .slice(LETTER_LENGTH - (shift % processData.length))
        .concat(processData.slice(0, LETTER_LENGTH - (shift % processData.length)));
    }

    return abcdArr.map((i, index) => ({
      letter: i,
      percent1: letterFrequencyArr[index],
      percent2: processData[index],
    }));
  };

  const handleLeft = () => {
    setShift((state) => (state === 0 ? LETTER_LENGTH - 1 : state - 1));
  };

  const handleRight = () => {
    setShift((state) => (state === LETTER_LENGTH - 1 ? 0 : state + 1));
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleLeft();
      }
      if (event.key === 'ArrowRight') {
        handleRight();
      }
    };
    document.addEventListener('keyup', handleKey);
    return () => document.removeEventListener('keyup', handleKey, true);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b-2 flex justify-center items-center space-x-5 py-2">
        <Button onClick={handleLeft} className="w-16 flex">
          <ArrowLeft className="w-6 m-auto text-accent-5 fill-current" />
        </Button>
        <span className="w-20 text-center">Posun: {shift}</span>
        <Button onClick={handleRight} className="w-16 flex">
          <ArrowLeft className="w-6 m-auto transform rotate-180 text-accent-5 fill-current" />
        </Button>
      </div>
      <div className="flex-1">
        <ResponsiveContainer>
          <LineChart data={generateData()} margin={{ right: 20, left: 20, bottom: 10 }}>
            <CartesianGrid stroke="#eeeeee" horizontal={false} />
            <XAxis dataKey="letter" axisLine={{ stroke: '#eeeeee', strokeWidth: 2 }} />
            <YAxis hide />
            <Line dataKey="percent1" stroke="#e2e7f7" dot={false} strokeWidth={4} isAnimationActive={false} />
            <Line dataKey="percent2" stroke="#718ce6" dot={false} strokeWidth={4} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FA;
