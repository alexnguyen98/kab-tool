import React from 'react';
import { abcdArr, LETTER_LENGTH } from '../../constants/vocabulary';
import { useGlobalContext } from '../../context/ManagedContext';
import { AffineType } from '../../types/cipther';
import { getMultiplicativeInverse } from '../../utils/helpers';
import Input from '../common/Input';

const Afinne: React.FC = () => {
  const { input, affine, setAffine, setOutput } = useGlobalContext();

  const handleA = (e: any) => handleAffine({ ...affine, a: parseInt(e.target.value) });
  const handleB = (e: any) => handleAffine({ ...affine, b: parseInt(e.target.value) });

  const handleAffine = (affine: AffineType) => {
    if (!input?.length) return;
    let solution;
    if (affine.a === 1 && !affine.b) {
      solution = input;
    } else {
      try {
        let res = input;
        const aInverse = getMultiplicativeInverse(affine.a);
        abcdArr.forEach((i, index) => {
          const decryptedIndex = (aInverse * (index - affine.b)) % LETTER_LENGTH;
          res = res.replaceAll(i, abcdArr[decryptedIndex]?.toUpperCase());
        });
        console.log(res);
        solution = res;
      } catch (err) {
        solution = '"A" neni prvocislo s 26!';
      }
    }
    setAffine(affine);
    setOutput(solution);
  };

  return (
    <div>
      <div className="inline-block p-5">
        <span className="w-20 text-center mr-2">a: </span>
        <Input type="number" min={1} max={100} value={affine.a} onChange={handleA} />
      </div>
      <div className="inline-block py-5">
        <span className="w-20 text-center mr-2">b: </span>
        <Input type="number" min={0} max={100} value={affine.b} onChange={handleB} />
      </div>
    </div>
  );
};

export default Afinne;
