import React, { useEffect, useRef } from 'react';
//@ts-ignore
import * as typeformEmbed from '@typeform/embed';
import { TYPEFORM_URL } from '../../utils/typeform';

const Typeform: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      typeformEmbed.makeWidget(ref.current, TYPEFORM_URL, {
        opacity: 0,
        hideFooter: true,
        buttonText: 'Register for early access',
      });
    }
  }, []);

  return (
    <div id="early-access" ref={ref} className="bg-green-1 h-200 w-full" />
  );
};

export default Typeform;
