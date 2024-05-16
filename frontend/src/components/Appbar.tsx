import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <div className="flex justify-between items-center px-10 border-b py-4">
      <Link to={"/blogs"}>
        <div className="font-bold">Medium</div>
      </Link>
      <div>
        <Link to={"/publish"}>
          {" "}
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 mr-4"
          >
            New
          </button>{" "}
        </Link>

        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {"user"[0].toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
