import React from 'react';
import cn from 'classnames';

type Props = {
  type?: 'number' | 'email';
  max?: number;
  min?: number;
  className?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const Input: React.FC<Props> = ({ className, ...props }) => (
  <input className={cn('bg-white shadow rounded-md border-2 px-3 py-1', className)} {...props} />
);

export default Input;
