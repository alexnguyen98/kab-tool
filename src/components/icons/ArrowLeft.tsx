import React from 'react';

type Props = {
  className?: string;
};

const ArrowLeft: React.FC<Props> = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="current">
    <rect fill="none" height="24" width="24" />
    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
  </svg>
);

export default ArrowLeft;
