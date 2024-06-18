import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
import RandomDate from "./RandomDate";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <>
      <Appbar />
      <div className="grid grid-cols-12 gap-8 px-10 py-10 bg-gradient-to-tl from-current via-slate-600 to-current min-h-screen">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="font-extrabold text-4xl mb-4">{blog.title}</h1>
            <p className="text-slate-500 mb-6">
              posted on <RandomDate />
            </p>
            <div className="text-lg text-slate-700 leading-relaxed">
              {blog.content}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-lg font-semibold mb-4">Author</div>
            <div className="flex items-center mb-4">
              <Avatar name={blog.author.name || "Anonymous"} />
              <div className="ml-4 text-xl font-bold">
                {blog.author.name.charAt(0).toUpperCase() +
                  blog.author.name.slice(1) || "Anonymous"}
              </div>
            </div>
            <div className="text-slate-500 mb-4">
              A catch phrase about the author's ability to grab viewers'
              attention.
            </div>
            <div className="border-t mt-4 pt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
