import React from "react";
import Text from "../components/common/Text";
import { useGlobalContext } from "../context/ManagedContext";
import TextArea from "./common/TextArea";

const Results: React.FC = () => {
  const { input, setInput, output, setOutput } = useGlobalContext();

  const handleOutput = (e: any) => {
    setOutput(e.target.value?.toLowerCase());
  };

  const handleInput = (e: any) => {
    setInput(e.target.value?.toLowerCase());
  };

  return (
    <div className="flex-1 flex flex-col border-r-2 border-accent-2">
      <div className="flex-1 flex flex-col border-b-2 border-accent-2">
        <Text variant="small" className="p-3 bg-accent-1">
          Input
        </Text>
        <TextArea
          className="flex-1 px-3 focus:outline-none"
          value={input}
          onChange={handleInput}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <Text variant="small" className="p-3">
          Output
        </Text>
        <TextArea
          disabled
          className="flex-1 px-3 bg-white cursor-not-allowed"
          value={output?.toLowerCase()}
          onChange={handleOutput}
        />
      </div>
    </div>
  );
};

export default Results;
