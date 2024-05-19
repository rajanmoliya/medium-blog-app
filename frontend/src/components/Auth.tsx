import { Link, useNavigate } from "react-router-dom";
// not the ideal way to import
import { SignupInput } from "../../../frontend/common/src/index";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Spinner from "./Spinner";

export default function Auth({ type }: { type: string }) {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function sendRequest() {
    setLoading(true);
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInput
      );

      const jwt = response.data.jwt;
      const name = response.data.name;
      localStorage.setItem("token", jwt);
      localStorage.setItem("name", name ? name : "Anonymous");

      setLoading(false);

      navigate("/blogs");
    } catch (error: any) {
      setLoading(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(error.response.data.error);
      }
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
            className=" w-full p-2 border rounded-md my-3 bg-gray-50 "
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
          <div className="text-red-500 text-center">{errorMessage}</div>
          <div className="my-3 ">
            <button
              type="button"
              className={
                loading
                  ? "cursor-not-allowed opacity-50 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full font-bold"
                  : "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full font-bold"
              }
              onClick={sendRequest}
            >
              {type === "signup" ? "Sign up" : "Sign in"}{" "}
              {loading ? <Spinner /> : null}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
