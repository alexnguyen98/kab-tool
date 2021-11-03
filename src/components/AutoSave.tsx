import React, { useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useGlobalContext } from '../context/ManagedContext';

const AutoSave: React.FC = () => {
  const { input, setInput } = useGlobalContext();
  const debouncedInput = useDebounce(input, 1000);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data');
      if (data) {
        setInput(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!input.trim().length) return;
    const data = JSON.stringify(input);
    localStorage.setItem('saved_data', data);
  }, [debouncedInput]);

  return null;
};

export default AutoSave;
