import { FC } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: FC = ({ children }) => {
  return (
    <div className="bg-primary h-full mx-auto">
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};
