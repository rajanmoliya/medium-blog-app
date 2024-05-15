import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className=" p-2 w-screen max-w-screen-md cursor-pointer">
        <div>
          <Avatar name={authorName} />{" "}
          <span className=" font-light">{authorName}</span> &#183;{" "}
          <span className=" text-slate-500 text-sm font-thin">
            {publishedDate}
          </span>
        </div>
        <div className="text-xl font-bold py-2">{title}</div>
        <div className="text-md ">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin py-2">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
        <div className="border-b mt-2"></div>
      </div>
    </Link>
  );
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="text-xs text-gray-600 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
