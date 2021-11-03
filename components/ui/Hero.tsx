import { FC } from "react";
import Link from "next/link";
import { Container } from "./Container";

type Props = {
  headline: string;
  description: string;
};

export const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className="flex flex-col py-32 justify-center md:flex-row">
          <h2 className="flex-1 max-w-xl text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            {headline}
          </h2>
          <div className="flex-1 max-w-4xl">
            <p className="mt-5 text-xl leading-7 text-white">{description}</p>
            <Link href="/">
              <a className="block text-white pt-3 font-bold hover:underline cursor-pointer">
                Read it here
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
