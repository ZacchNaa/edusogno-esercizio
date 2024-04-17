import { FC, ReactNode } from "react";
import Rocket from "../../assets/rocket.svg";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full bg-lightblue md:bg-hero-wave bg-cover h-screen lg:h-[160vh]">
      <Header />
      <img
        className="absolute w-0 md:w-24 2xl:w-36 bottom-0 md:bottom-[8.2%] xl:bottom-[6.8%] 2xl:bottom-20 right-10 lg:right-40  "
        src={Rocket}
        alt="Wave"
      />
      <div className="absolute bg-white w-0 h-0 md:w-64 md:h-64 xl:w-96 xl:h-96 rounded-full bottom-0 md:bottom-[38%] xl:bottom-[24%] 2xl:bottom-[40%] -left-24 md:-left-32 xl:-left-48"></div>
      <div className="absolute bg-white w-0 h-0 md:w-20 md:h-20 xl:w-40 xl:h-40 2xl:w-32 2xl:h-32 rounded-full bottom-0 md:bottom-80 xl:bottom-[36%] 2xl:bottom-1/2 right-5 2xl:right-10"></div>
      {/* Content */}
      <main className="w-full flex flex-col gap-5 pt-10 md:pt-20 pb-5 px-2 items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
