import Logo from "../../assets/logo.svg"


const Header = () => {
  return (
    <header className="w-full flex justify-start items-center pl-10 bg-white rounded-b-xl shadow-lg h-16">
      <img className="w-20" src={Logo} alt="Wave" />
    </header>
  );
};

export default Header;
