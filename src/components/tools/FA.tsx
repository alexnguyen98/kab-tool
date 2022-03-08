import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { abcdArr, letterFrequencyArr, LETTER_LENGTH } from '../../constants/vocabulary';
import Button from '../common/Button';
import { useGlobalContext } from '../../context/ManagedContext';
import ArrowLeft from '../icons/ArrowLeft';

type Data = { [key: string]: number };

const FA: React.FC = () => {
  const { input, faShift, setFaShiftLeft, setFaShiftRight } = useGlobalContext();
  const { theme } = useTheme();
  const isLightMode = theme === 'light';

  // Generating letter frequency object of input
  const generateDataStats = (): Data => {
    const withoutWhiteSpace = input.replace(/\s/g, '');

    if (!withoutWhiteSpace.length) return {};

    const freq: Data = {};

    withoutWhiteSpace.split('').forEach((i: string) => {
      const letter = i.toLowerCase();
      if (freq[letter]) {
        freq[letter]++;
      } else {
        freq[letter] = 1;
      }
    });
    Object.keys(freq).forEach((i) => {
      freq[i] = freq[i] / withoutWhiteSpace.length;
    });

    return freq;
  };

  // Generating letter frequency data of english alphabet and input for graph
  const generateData = () => {
    const data = generateDataStats();
    let processData = abcdArr.map((i) => (data[i] ? data[i] : 0));

    // Change indexes of letters on shift
    if (faShift) {
      processData = processData
        .slice(LETTER_LENGTH - (faShift % processData.length))
        .concat(processData.slice(0, LETTER_LENGTH - (faShift % processData.length)));
    }

    return abcdArr.map((i, index) => ({
      letter: i,
      percent1: letterFrequencyArr[index],
      percent2: processData[index],
    }));
  };

  const handleLeft = () => {
    setFaShiftLeft();
  };

  const handleRight = () => {
    setFaShiftRight();
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
    return () => document.removeEventListener('keyup', handleKey);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b-2 border-accent-2 flex justify-center items-center space-x-5 py-2">
        <Button onClick={handleLeft} className="w-16 flex">
          <ArrowLeft className="w-6 m-auto text-accent-5 fill-current" />
        </Button>
        <span className="w-20 text-center">Posun: {faShift}</span>
        <Button onClick={handleRight} className="w-16 flex">
          <ArrowLeft className="w-6 m-auto transform rotate-180 text-accent-5 fill-current" />
        </Button>
      </div>
      <div className="flex-1">
        <ResponsiveContainer>
          <LineChart data={generateData()} margin={{ right: 20, left: 20, bottom: 10 }}>
            <CartesianGrid stroke={isLightMode ? '#eeeeee' : '#444444'} horizontal={false} />
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
