import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
import RandomDate from "./RandomDate";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <>
      <Appbar />

      <div className="grid grid-cols-12 px-10 py-10">
        <div className=" col-span-8 mr-8">
          <div className=" font-extrabold text-4xl">{blog.title}</div>
          <div className=" text-slate-500 pt-2">posted on {<RandomDate />}</div>
          <div className="text-lg pt-4 text-slate-700 ">{blog.content}</div>
        </div>
        <div className="col-span-4 px-8 ">
          <div>
            <div>Author</div>
            <div className="flex items-center">
              <div className="py-2">
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>
              <div className="text-xl font-bold px-2">
                {blog.author.name.charAt(0).toUpperCase() +
                  blog.author.name.slice(1) || "Anonymous"}
              </div>
            </div>
            <div className="text-slate-500">
              A catch phrase about the author's abilty to grab viewers
              attention.
            </div>
            <div className="border-t mt-2">
              <div className="py-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md ">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
