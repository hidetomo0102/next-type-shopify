import { FC } from "react";
import Link from "next/dist/client/link";

type Props = {
  title: string;
  href: string;
};

export const NavLink: FC<Props> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a
        href=""
        className="text-accents-6 leading-6 font-medium transform hover:text-accents-9"
      >
        {title}
      </a>
    </Link>
  );
};
