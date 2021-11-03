import React from 'react';
import Text from '../components/common/Text';
import TextArea from './common/TextArea';
import { useGlobalContext } from '../context/ManagedContext';

const Results: React.FC = () => {
  const { input, setInput, output, setOutput } = useGlobalContext();

  const handleOutput = (e: any) => {
    setOutput(e.target.value?.toLowerCase());
  };

  const handleInput = (e: any) => {
    setInput(e.target.value?.toLowerCase());
  };

  return (
    <div className="flex-1 flex flex-col border-r-2">
      <div className="flex-1 flex flex-col">
        <Text variant="small" className="p-3">
          Output
        </Text>
        <TextArea disabled className="flex-1 px-3 bg-white cursor-not-allowed" value={output} onChange={handleOutput} />
      </div>
      <div className="flex-1 flex flex-col border-t-2">
        <Text variant="small" className="p-3">
          Input
        </Text>
        <TextArea className="flex-1 px-3 focus:outline-none" value={input} onChange={handleInput} />
      </div>
    </div>
  );
};

export default Results;
