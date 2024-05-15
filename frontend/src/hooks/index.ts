import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog {
    "content" : string;
    "title" : string;
    "id": string;
    "author": {
        "name":string
    }
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { blogs, loading };
};
