"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/validations/Login";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (payload) => {
    const data = await signIn("credentials", { 
      email: payload.email, 
      password: payload.password, 
      callbackUrl: "/application",
    });
    return data;
  };

  return (
    <div className="py-5 px-5">
      <form className="flex flex-col mb-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-6">
          <label>
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            placeholder="Email adresinizi giriniz"
            {...register("email")}
            value="user@example.com"
          />
          {errors.email && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-6">
          <label>
            Şifre <sup>*</sup>
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            placeholder="Şifrenizi giriniz"
            {...register("password")}
            value="@Password123"
          />
          {errors.password && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Giriş Yap
          </button>
      </form>
      <button
        onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/application" })}
        className="bg-slate-900 text-white px-6 py-2 rounded-md"
      >
        Sign In Google
      </button>
    </div>
  );
};

export default SignInForm;
