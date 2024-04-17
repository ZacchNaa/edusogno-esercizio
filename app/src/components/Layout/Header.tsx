import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useAuth } from "../../context/AuthContext";
import BaseButton from "../BaseButton";


const Header = () => {
  const navigate = useNavigate();
  const { userRole, setUserRole } = useAuth();

  const login = () => { 
    setUserRole("admin")
    navigate("/");
   }

  const logout = () => { 
    setUserRole("")
    navigate("/login");
   }

  return (
    <header className="w-full flex justify-between items-center px-10 bg-white rounded-b-xl shadow-md shadow-shadowBlue h-20 md:h-28">
      <img className="w-20" src={Logo} alt="Wave" />
      {userRole ? <BaseButton handleClick={() => logout()} label="logout"/> : <BaseButton handleClick={() => login()} label="login"/>}
    </header>
  );
};

export default Header;
