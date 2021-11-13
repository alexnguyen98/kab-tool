import React, { useEffect } from 'react';
import { abcdArr } from '../../constants/vocabulary';
import { useGlobalContext } from '../../context/ManagedContext';

const Substitution: React.FC = () => {
  const { subst, input, setSubst, setOutput } = useGlobalContext();

  const handleInput = (e: any) => {
    if (!e.target.value.match(/^[0-9]+$/)) {
      const newSubst = { ...subst, [e.target.name]: e.target.value.toLowerCase() };
      setSubst(newSubst);

      let res = input;
      Object.keys(newSubst).forEach((i) => {
        if (newSubst[i] && newSubst[i] !== '-') {
          res = res.replaceAll(newSubst[i], i.toUpperCase());
        }
      });
      setOutput(res);
    }
  };

  useEffect(() => {
    let res = input;
    Object.keys(subst).forEach((i) => {
      if (subst[i] && subst[i] !== '-') {
        res = res.replaceAll(subst[i], i.toUpperCase());
      }
    });
    setOutput(res);
  }, [input]);

  return (
    <div className="p-3">
      <ul className="flex flex-wrap">
        {abcdArr.map((i) => (
          <li key={i} className="flex flex-col items-center text-center m-1">
            <span className="w-10 text-accent-5 font-bold">{i}</span>
            <input
              name={i}
              value={subst[i] || ''}
              onChange={handleInput}
              className="bg-white shadow rounded-md border-2 w-10 px-2 py-1 text-center"
              maxLength={1}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Substitution;
