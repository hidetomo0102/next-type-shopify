import { FC } from "react";
import Link from "next/dist/client/link";
import { Heart } from "../icons/Heart";
import { Bag } from "../icons/Bag";

export const Usernav: FC = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="mr-6 cursor-pointer transition flex items-center outline-none text-primary hover:text-accents-6 hover:scale-110">
          <Bag />
        </li>
        <li className="mr-6 cursor-pointer transition flex items-center outline-none text-primary hover:text-accents-6 hover:scale-110">
          <Link href="/">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
