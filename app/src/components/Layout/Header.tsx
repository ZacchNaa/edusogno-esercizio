import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useAuth } from "../../context/AuthContext";
import BaseButton from "../BaseButton";


const Header = () => {
  const navigate = useNavigate();
  const { setUserRole } = useAuth();
  const Logout = () => { 
    setUserRole("user")
    navigate("/login");
   }

  return (
    <header className="w-full flex justify-between items-center px-10 bg-white rounded-b-xl shadow-md shadow-shadowBlue h-20 md:h-28">
      <img className="w-20" src={Logo} alt="Wave" />
      <BaseButton handleClick={() => Logout()} label="Logout" />
    </header>
  );
};

export default Header;
