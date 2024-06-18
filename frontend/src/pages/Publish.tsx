import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    setLoading(true);

    try {
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
    } catch (error) {
      console.error("Failed to publish blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Appbar />
      <div className="bg-gradient-to-tl from-current via-slate-600 to-current min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <input
            type="text"
            placeholder="Title"
            className="w-full h-16 px-4 py-2 mb-4 text-3xl font-bold border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write your blog post..."
            className="w-full h-96 px-4 py-2 mb-4 text-lg leading-8 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className={`w-full h-12 bg-blue-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
            }`}
            onClick={handlePublish}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Publish 🚀"}
          </button>
        </div>
      </div>
    </>
  );
}
