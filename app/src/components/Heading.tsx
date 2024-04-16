import { FC } from "react";

interface HeadingProps {
  heading: string;
}

const Heading: FC<HeadingProps> = ({ heading }) => {
  return <h1 className="text-3xl text-blueblack font-bold text-center w-full">{heading}</h1>;
};

export default Heading;
