import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  id?: string;
};

const Section: React.FC<Props> = ({ className, children, id }) => (
  <section className={cn(className)} id={id}>
    <div className="mx-auto px-5 md:px-10 max-w-7xl w-full flex flex-col">
      {children}
    </div>
  </section>
);

export default Section;
