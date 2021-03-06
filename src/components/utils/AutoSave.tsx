import React, { useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useGlobalContext } from '../../context/ManagedContext';

const AutoSave: React.FC = () => {
  const { setData, output, input, ic, faShift, shift, affine, subst } = useGlobalContext();
  // Debounce global state
  const debouncedInput = useDebounce(JSON.stringify({ output, input, ic, faShift, shift, affine, subst }), 1000);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data');
      if (data) {
        setData(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  // Save global state in local storage
  useEffect(() => {
    if (!input.trim().length) return;
    const data = JSON.stringify({
      output,
      input,
      ic,
      faShift,
      shift,
      affine,
      subst,
    });
    localStorage.setItem('saved_data', data);
  }, [debouncedInput]);

  return null;
};

export default AutoSave;
