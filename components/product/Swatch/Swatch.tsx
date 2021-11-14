import { FC } from "react";

import { Check } from "../../icons/Check";
import s from "./Swatch.module.css";

type Props = {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
};

export const Swatch: FC<Props> = ({ color, label, variant }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  return (
    <button style={color ? { backgroundColor: color } : {}} className={s.root}>
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null}
    </button>
  );
};
