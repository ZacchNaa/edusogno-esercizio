import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/loginValidationSchema";
import BaseInput from "../components/BaseInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import BaseButton from "../components/BaseButton";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import ApiConstants from "../configurations/apiConstants";
import { UserData } from "../types";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { isAuthenticated, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(ApiConstants.LOGIN_USER_URL, data)
      const user: UserData = response.data?.details
      login(user._id, user)
      // localStorage.setItem("user", JSON.stringify(user))
      // navigate("/");
      console.log("🚀 ~ onSubmit ~ response:", response)
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error)      
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const emailValue = watch("email");

  if (isAuthenticated){
    return <Navigate to="/" />
  }
  

  return (
    <Layout>
      <Heading heading="Hai già un account?" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-8 w-full md:w-1/2 md:mx-auto p-10 bg-white border border-blueblack rounded-2xl"
      >
        <BaseInput
          type="email"
          name="email"
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
          label="Inserisci la password"
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
        <BaseButton label="ACCEDI" loading={isSubmitting} disabled={isSubmitting} />
        <Link
          to={`/reset-password?email=${encodeURIComponent(emailValue)}`}
          className="my-0 text-metal font-400 text-sm w-full text-center"
        >
          Forgot password?
        </Link>
        <Link
          to="/register"
          className="my-2 text-metal font-400 text-sm w-full text-center"
        >
          Non hai ancora un profilo? <b className="!font-700">Registrati</b>
        </Link>
      </form>
    </Layout>
  );
};

export default Login;
