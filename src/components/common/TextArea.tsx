import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: any) => void;
};

const TextArea: React.FC<Props> = ({ className, ...props }) => <textarea className={cn('w-full bg-accent-1', className)} {...props} />;

export default TextArea;
