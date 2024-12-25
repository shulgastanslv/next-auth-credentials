"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const searchUrl = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    await signIn("credentials", {
      ...user,
      redirect: true,
      callbackUrl: searchUrl.get("callbackUrl") || "/",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-5 bg-white/5 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-80">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Register account
          </h2>
        </div>
        <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input
            type="username"
            placeholder="Enter your username"
            label="Username"
            variant="flat"
            labelPlacement="outside"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isRequired
          />
          <Input
            type="password"
            label="Password"
            labelPlacement="outside"
            variant="flat"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
          />
          <div>
            <Button
              color="primary"
              type="submit"
              variant="shadow"
              className="w-full"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <a
              href="/auth/login/"
              className="hover:underline"
            >
              Back
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
