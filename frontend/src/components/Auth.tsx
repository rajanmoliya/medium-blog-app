import { Link, useNavigate } from "react-router-dom";
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
    setErrorMessage("");

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
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-full lg:max-w-md">
        <div className="font-extrabold text-4xl text-center text-gray-800">
          {type === "signup" ? "Create an account" : "Sign in "}
        </div>
        <div className="text-center mt-2 text-gray-600">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span className="underline text-blue-500 px-2">
            <Link to={type === "signup" ? "/signin" : "/signup"}>
              {type === "signup" ? "Sign in" : "Sign up"}
            </Link>
          </span>
        </div>
        {/* Form */}
        <div className="mt-5 space-y-4">
          {type === "signup" && (
            <div>
              <label className="font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border rounded-md bg-gray-50 mt-2"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setPostInput({ ...postInput, name: e.target.value })
                }
              />
            </div>
          )}

          <div>
            <label className="font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded-md bg-gray-50 mt-2"
              placeholder="you@example.com"
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setPostInput({ ...postInput, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border rounded-md bg-gray-50 mt-2"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setPostInput({ ...postInput, password: e.target.value })
              }
            />
          </div>
          <div className="text-red-500 text-center">{errorMessage}</div>
          <div>
            <button
              type="button"
              className={`w-full p-3 rounded-lg font-bold text-white ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
              }`}
              onClick={sendRequest}
            >
              {type === "signup" ? "Sign up" : "Sign in"}{" "}
              {loading && <Spinner />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
