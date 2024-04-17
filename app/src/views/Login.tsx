import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/loginValidationSchema";
import BaseInput from "../components/BaseInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import BaseButton from "../components/BaseButton";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { useAuth } from "../context/AuthContext";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { setUserRole } = useAuth();

  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    setUserRole("admin")
    navigate("/");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
          to="/reset-password"
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
