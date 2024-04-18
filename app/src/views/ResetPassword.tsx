import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/loginValidationSchema";
import BaseInput from "../components/BaseInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import BaseButton from "../components/BaseButton";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import ApiConstants from "../configurations/apiConstants";
import axios from "axios";

const ResetPassword: FC = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email")!;
  const [showPassword, setShowPassword] = useState<boolean>(false);
 
  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      axios.post(ApiConstants.RESET_USER_PASSWORD_URL, data)
      navigate("/login");
    } catch (error) {
      return error      
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <Heading heading="Change you password!" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-8 w-full md:w-1/2 md:mx-auto p-10 bg-white border border-blueblack rounded-2xl"
      >
        <BaseInput
          type="email"
          name="email"
          value={email}
          readOnly
          placeholder="name@example.com"
          label="Inserisci l’email"
          register={register}
          error={errors.email?.message}
        />
        <BaseInput
          type={showPassword ? "text" : "password"}
          name="password"
          isPasswordField={true}
          placeholder="Scrivila qui"
          label="New password"
          register={register}
          error={errors.password?.message}
          Icon={
            !showPassword ? (
              <FaEye className="text-blue" />
            ) : (
              <FaEyeSlash className="text-blue" />
            )
          }
          handleClick={handleTogglePassword}
        />
        <BaseButton label="RESET PASSWORD" loading={isSubmitting} disabled={isSubmitting} />
        <Link
          to="/login"
          className="my-4 text-metal font-400 text-sm w-full text-center"
        >
          Hai già un account? <b className="!font-700">Accedi</b>
        </Link>
      </form>
    </Layout>
  );
};

export default ResetPassword;
