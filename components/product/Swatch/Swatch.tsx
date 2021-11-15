import { FC } from "react";
import cn from "classnames";

import { Check } from "../../icons/Check";
import s from "./Swatch.module.css";
import { isDark } from "../../../lib/color";

type Props = {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  active?: boolean;
  onClick: () => void;
};

export const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null}
    </button>
  );
};
