import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: any) => void;
};

const TextArea: React.FC<Props> = ({ className, disabled, value, onChange }) => (
  <textarea className={cn('w-full', className)} disabled={disabled} value={value} onChange={onChange} />
);

export default TextArea;
