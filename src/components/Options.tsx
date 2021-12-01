import cn from 'classnames';
import React, { useState } from 'react';
import { cipherArr, CIPTHER_TYPES } from '../constants/ciphers';
import Afinne from './tools/Afinne';
import FA from './tools/FA';
import Shift from './tools/Shift';
import Substitution from './tools/Substitution';

const Options: React.FC = () => {
  const [activeType, setActiveType] = useState<CIPTHER_TYPES>(CIPTHER_TYPES.FA);

  const handleType = (i: CIPTHER_TYPES) => setActiveType(i);

  const handleHelp = (i: CIPTHER_TYPES) => {
    console.log(i);
    alert('help');
  };

  const getToolView = () => {
    switch (activeType) {
      case CIPTHER_TYPES.FA:
        return <FA />;
      case CIPTHER_TYPES.SHIFT:
        return <Shift />;
      case CIPTHER_TYPES.AFFINE:
        return <Afinne />;
      case CIPTHER_TYPES.SUBSITUTION:
        return <Substitution />;
      default:
        return null;
    }
  };

  return (
    <aside className="flex-2 flex flex-col">
      <ul className="border-b-2 flex flex-nowrap spa">
        {cipherArr.map((i) => (
          <li key={i} className="my-2 mx-1">
            <button
              onClick={() => handleType(i)}
              className={cn(
                'text-sm text-blue-900 bg-blue-100 hover:bg-blue-200 hover:border-blue-200 border-blue-100 border-2 capitalize pl-4 pr-2 py-1 rounded-full',
                {
                  'border-blue-900 border-2': activeType === i,
                }
              )}
            >
              {i}
              {/* <span onClick={() => handleHelp(i)} className="text-xs font-bold bg-blue-300 text-black px-2 rounded-full ml-1">
                ?
              </span> */}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex-1 flex">{getToolView()}</div>
    </aside>
  );
};

export default Options;
