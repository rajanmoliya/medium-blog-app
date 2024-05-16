import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />

      <div className="max-w-4xl mx-auto mt-8">
        <input
          type="text"
          placeholder="Title"
          className="w-full h-16 px-4 py-2 text-3xl font-bold border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your blog post..."
          className="w-full h-96 mt-8 px-4 py-2 text-lg leading-8 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={async () => {
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content,
              },
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              }
            );
            navigate(`/blog/${response.data.post}`);
          }}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
