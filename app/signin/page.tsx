"use client";

import React, { useRef } from "react";
import Button from "../components/elements/Button";
import { signIn } from "next-auth/react";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async () => {
    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold text-blue-600">
          <i className="fa-solid fa-user text-blue-600"></i> Sign In
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="peter@gmail.com"
            onChange={(e) => (email.current = e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password..."
            onChange={(e) => (password.current = e.target.value)}
          />
        </div>
        {/* <div className="mt-3 flex justify-between items-center">
          <div className="space-x-2">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <div>
            <a href="#" className="text-blue-600 font-semibold text-sm">
              Forgot Password?
            </a>
          </div>
        </div> */}
        <div className="mt-5">
          <Button
            variant="primary"
            className="w-full rounded-md hover:bg-transparent hover:text-blue-600 font-semibold"
            paddingLess={false}
            onClick={onSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
