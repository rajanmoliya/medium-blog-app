import Appbar from "../components/Appbar";
import BlogSkeleton from "../components/BlogSkeleton";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  if (loading || !blog)
    return (
      <div className="">
        <Appbar />
        <div className="bg-gradient-to-tl from-current via-slate-600 to-current h-screen">
          <BlogSkeleton />
        </div>
      </div>
    );
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
}
