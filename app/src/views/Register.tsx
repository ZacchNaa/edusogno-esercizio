import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/registerValidationSchema";
import BaseInput from "../components/BaseInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import BaseButton from "../components/BaseButton";
import Heading from "../components/Heading";
import Layout from "../components/Layout/Layout";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);

    console.log(data);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col gap-5">
        <Heading heading="Crea il tuo account" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-8 w-1/2 mx-auto p-10 bg-white border border-blueblack rounded-2xl"
        >
          <BaseInput
            type="text"
            name="firstName"
            placeholder="Mario"
            label="Inserisci il nome"
            register={register}
            error={errors.firstName?.message}
          />
          <BaseInput
            type="text"
            name="lastName"
            placeholder="Rossi"
            label="Inserisci il cognome"
            register={register}
            error={errors.lastName?.message}
          />
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
          <BaseButton label="REGISTRATI" />
          <Link
            to="/login"
            className="my-4 text-metal font-400 text-sm w-full text-center"
          >
            Hai già un account? <b className="!font-700">Accedi</b>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
