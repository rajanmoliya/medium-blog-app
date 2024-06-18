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
        <div className="flex justify-center py-10 bg-gradient-to-tl from-current via-slate-600 to-current">
          <div className="space-y-4">
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
      <div className="flex justify-center py-10 bg-gradient-to-tl from-current via-slate-600 to-current">
        <div className="space-y-6 w-screen max-w-screen-md">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
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
