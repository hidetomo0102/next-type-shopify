import { FC } from "react";
import Link from "next/dist/client/link";
import { Heart } from "../icons/Heart";
import { Bag } from "../icons/Bag";
import { useUI } from "../ui/context";

export const Usernav: FC = () => {
  const { openSidebar } = useUI();

  return (
    <nav>
      <ul className="flex">
        <li className="mr-6 cursor-pointer transition flex items-center outline-none text-primary hover:text-accents-6 hover:scale-110">
          <Bag onClick={openSidebar} />
        </li>
        <li className="mr-6 cursor-pointer transition flex items-center outline-none text-primary hover:text-accents-6 hover:scale-110">
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
