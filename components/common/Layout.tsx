import { FC } from "react";

import { Footer } from "./Footer";

export const Layout: FC = ({ children }) => {
  return (
    <div className="bg-primary h-full mx-auto">
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};
