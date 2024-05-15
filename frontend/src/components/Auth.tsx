import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
// not the ideal way to import
import { SignupInput } from "../../../common/src/index";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: string }) {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInput
      );

      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" ">
        <div className="font-bold text-3xl px-8">
          {type === "signup" ? "Create an account" : "Signin to an account"}{" "}
        </div>
        <div className="opacity-75 text-center mt-1 px-8">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span className=" underline px-2">
            <Link to={type === "signup" ? "/signin" : "/signup"}>
              {type === "signup" ? "signin" : "signup"}{" "}
            </Link>
          </span>
        </div>
        {/* form */}

        <div className="mt-5 ">
          {type === "signup" ? (
            <div>
              <label className=" font-bold mt-2" htmlFor="name">
                Name
              </label>
              <br />
              <input
                className=" w-full p-2 border rounded-md my-3 bg-gray-50"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setPostInput({
                    ...postInput,
                    name: e.target.value,
                  });
                }}
              />
            </div>
          ) : null}

          <label className=" font-bold " htmlFor="email">
            Email
          </label>
          <br />
          <input
            className=" w-full p-2 border rounded-md my-3 bg-gray-50"
            placeholder="m@example.com"
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              setPostInput({
                ...postInput,
                email: e.target.value,
              });
            }}
          />

          <label className=" font-bold " htmlFor="password">
            Password
          </label>
          <br />
          <input
            className=" w-full p-2 border rounded-md my-3 bg-gray-50"
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPostInput({
                ...postInput,
                password: e.target.value,
              });
            }}
          />
          <div className="my-3 ">
            <Button
              text={type === "signup" ? "Sign up" : "Sign in"}
              onClick={sendRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
