export default function AllBlogsSkeleton() {
  return (
    <div>
      <div className="p-2 w-screen max-w-screen-md cursor-pointer ">
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col">
            <div className="h-4 w-20 bg-gray-300 mb-1"></div>
            <div className="h-3 w-16 bg-gray-300"></div>
          </div>
        </div>
        <div className="h-8 w-4/5 bg-gray-300 my-2"></div>
        <div className="h-16 w-full bg-gray-300 my-2"></div>
        <div className="h-3 w-24 bg-gray-300 my-2"></div>
        <div className="border-b mt-2"></div>
      </div>
    </div>
  );
}
