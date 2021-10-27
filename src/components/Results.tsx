import React from 'react';
import Text from '../components/common/Text';
import TextArea from './common/TextArea';
import { useGlobalContext } from './context/ManagedContext';

const Results: React.FC = () => {
  const { setInput } = useGlobalContext();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col border-r-2">
      <div className="flex-1 flex flex-col">
        <Text variant="small" className="p-3">
          Output
        </Text>
        <TextArea disabled className="flex-1 px-3 bg-white cursor-not-allowed" />
      </div>
      <div className="flex-1 flex flex-col border-t-2">
        <Text variant="small" className="p-3">
          Input
        </Text>
        <TextArea className="flex-1 px-3 focus:outline-none" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Results;
