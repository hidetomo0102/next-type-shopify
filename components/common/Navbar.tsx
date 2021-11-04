import { FC } from "react";
import Link from "next/dist/client/link";

import { Container } from "../ui/Container";
import { NavLink } from "./atoms/NavLink";
import { Usernav } from "./Usernav";

export const Navbar: FC = () => {
  return (
    <Container>
      <div className="flex flex-row md:py-6">
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className="text-2xl font-bold"></a>
          </Link>
          <nav className="ml-6 space-x-5">
            <NavLink title="All" href="/" />
            <NavLink title="Clothes" href="/" />
            <NavLink title="Accesories" href="/" />
            <NavLink title="Shoes" href="/" />
          </nav>
          <Usernav />
        </div>
      </div>
    </Container>
  );
};
