import cn from "classnames";
import React, { ReactNode } from "react";

type Variant = "default";

type Props = {
  className?: string;
  variant?: Variant;
  children: ReactNode;
  onClick?: () => any;
};

const Button: React.FC<Props> = ({
  className = "",
  variant = "default",
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        {
          ["bg-accent-0 shadow rounded-md border-2 border-accent-2"]:
            variant === "default",
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
