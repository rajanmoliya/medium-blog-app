import AllBlogsSkeleton from "../components/AllBlogsSkeleton";
import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import RandomDate from "../components/RandomDate";
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
              publishedDate={<RandomDate />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
