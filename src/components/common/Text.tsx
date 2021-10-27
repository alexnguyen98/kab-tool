import React, { JSXElementConstructor } from 'react';
import cn from 'classnames';

type Variant = 'heading' | 'sectionHeading' | 'body' | 'small';

type Props = {
  variant?: Variant;
  className?: string;
  html?: string;
  onClick?: () => any;
};

const Text: React.FC<Props> = ({ className = '', variant = 'body', children, html, onClick }) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    body: 'p',
    small: 'p',
    heading: 'h1',
    sectionHeading: 'h2',
  };

  const Component: JSXElementConstructor<any> | React.ReactElement<any> | React.ComponentType<any> | string = componentsMap![variant!];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Component
      className={cn(
        {
          ['text-accent-4 font-bold text-sm']: variant === 'small',
          ['text-xl md:text-2xl']: variant === 'body',
          ['text-4xl md:text-5xl font-bold pb-6 md:pb-8']: variant === 'sectionHeading',
          ['text-5xl md:text-7xl font-bold pb-6 md:pb-8']: variant === 'heading',
        },
        className
      )}
      onClick={onClick}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
