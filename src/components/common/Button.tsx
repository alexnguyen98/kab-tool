import React from 'react';
import cn from 'classnames';

type Variant = 'default';

type Props = {
  className?: string;
  variant?: Variant;
  onClick?: () => any;
};

const Button: React.FC<Props> = ({ className = '', variant = 'default', children, onClick }) => {
  return (
    <button
      className={cn(
        {
          ['bg-white shadow rounded-md border-2']: variant === 'default',
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
