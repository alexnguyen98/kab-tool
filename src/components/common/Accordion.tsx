import React, { useRef, useState } from 'react';
import cn from 'classnames';
import Text from './Text';
import Plus from '../icons/Plus';

type Props = {
  className?: string;
  header: string;
  body: string;
};

const Accordion: React.FC<Props> = ({ className, header, body }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => setActive((state) => !state);

  return (
    <div className={cn('py-3 max-w-lg', className)}>
      <button onClick={handleToggle} className="flex items-center">
        <Plus className="w-8 mr-4" filled={active} />
        <Text variant="small" className="font-bold">
          {header}
        </Text>
      </button>
      <div
        ref={ref}
        style={{
          maxHeight: active ? `${(ref.current as any).scrollHeight}px` : '0px',
        }}
        className="pt-3 pl-12 overflow-auto transition-max-height duration-500 ease-in-out"
      >
        <Text variant="small" className="text-gray-700">
          {body}
        </Text>
      </div>
    </div>
  );
};

export default Accordion;
