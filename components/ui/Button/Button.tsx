import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import s from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

export const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={classNames(s.root, className)} type="button" {...rest}>
      {children}
    </button>
  );
};
