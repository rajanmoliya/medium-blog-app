import AllBlogsSkeleton from "../components/AllBlogsSkeleton";
import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <AllBlogsSkeleton />
            <AllBlogsSkeleton />
            <AllBlogsSkeleton />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={" 23-Feb-2023 "}
            />
          ))}
        </div>
      </div>
    </>
  );
}
