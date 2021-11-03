import React from 'react';
import { abcdArr, LETTER_LENGTH } from '../../constants/vocabulary';
import { useGlobalContext } from '../../context/ManagedContext';
import Input from '../common/Input';

const Shift: React.FC = () => {
  const { input, shift, setShift, setOutput } = useGlobalContext();

  const handleInput = (e: any) => {
    if (!input?.length) return;
    setShift(e.target.value);
    let res = input;
    abcdArr.forEach((i, index) => {
      res = res.replaceAll(i, abcdArr[(index + parseInt(e.target.value)) % LETTER_LENGTH]?.toUpperCase());
    });
    setOutput(res);
  };

  return (
    <div className="inline-block p-5">
      <span className="w-20 text-center mr-2">Posun: </span>
      <Input type="number" min={0} max={25} value={shift} onChange={handleInput} />
    </div>
  );
};

export default Shift;
