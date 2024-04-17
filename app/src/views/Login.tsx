import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/registerValidationSchema';
import BaseInput from "../components/BaseInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    
    console.log(data);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-8 w-1/2 mx-auto p-10 bg-white border border-blueblack rounded-2xl">
      
    </form>
  );
};

export default Login;
