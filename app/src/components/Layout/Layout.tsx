import { FC, ReactNode } from "react";
import Rocket from "../../assets/rocket.svg"
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full bg-hero-wave bg-cover bg-bottom overflow-hidden">
        <Header />
      <img className="absolute w-16 md:w-24 2xl:w-36 bottom-11 md:bottom-14 xl:bottom-12 2xl:bottom-20 right-10 lg:right-48  " src={Rocket} alt="Wave" />
        <div className="absolute bg-white w-44 h-44 xl:w-6h-60 xl:h-60 md:w-64 md:h-64 rounded-full bottom-28 md:bottom-48 lg:bottom-72 2xl:top-1/4 -left-24 md:-left-32 lg:-left-32"></div>
        <div className="absolute bg-white w-16 h-16 md:w-20 md:h-20 rounded-full bottom-44 md:bottom-80 2xl:bottom-1/2 right-5 2xl:right-10"></div>        
      {/* Content */}
      <main className="flex items-center justify-center h-screen">{children}</main>
    </div>
  );
};

export default Layout;
