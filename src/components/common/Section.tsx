import cn from "classnames";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  id?: string;
  children: ReactNode;
};

const Section: React.FC<Props> = ({ className, children, id }) => (
  <section className={cn(className)} id={id}>
    <div className="mx-auto px-5 md:px-10 max-w-7xl w-full flex flex-col">
      {children}
    </div>
  </section>
);

export default Section;
