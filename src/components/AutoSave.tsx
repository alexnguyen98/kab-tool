import React, { useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useGlobalContext } from '../context/ManagedContext';

const AutoSave: React.FC = () => {
  const { setData, input, faShift, shift, affine } = useGlobalContext();
  const debouncedInput = useDebounce(JSON.stringify({ input, faShift, shift, affine }), 1000);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data');
      if (data) {
        setData(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!input.trim().length) return;
    const data = JSON.stringify({
      input,
      faShift,
      shift,
      affine,
    });
    localStorage.setItem('saved_data', data);
  }, [debouncedInput]);

  return null;
};

export default AutoSave;
