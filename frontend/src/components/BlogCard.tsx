import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: React.ReactNode;
}

export function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-screen max-w-screen-md cursor-pointer hover:shadow-2xl">
        <div className="flex items-center mb-4">
          <Avatar name={authorName} />
          <div className="ml-3">
            <span className="font-semibold text-gray-800">
              {authorName.charAt(0).toUpperCase() + authorName.slice(1) ||
                "Anonymous"}
            </span>
            <span className="text-gray-500 mx-2">&#183;</span>
            <span className="text-gray-500 text-sm">{publishedDate}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-2">{title}</div>
        <div className="text-gray-700 mb-4">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-gray-500 text-sm">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-700">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
