export default function BlogSkeleton() {
  return (
    <div>
      <div className="grid grid-cols-12 px-10 py-10">
        <div className="col-span-8 ">
          <div className="animate-pulse font-extrabold text-4xl bg-gray-300 h-10 w-3/4 mb-4"></div>
          <div className="animate-pulse text-slate-500 bg-gray-300 h-4 w-1/2"></div>
          <div className="animate-pulse text-lg pt-4 text-slate-700 bg-gray-300 h-40 w-11/12"></div>
        </div>
        <div className="col-span-4 ">
          <div>
            <div className="animate-pulse bg-gray-300 h-8 w-1/2"></div>
            <div className="flex items-center">
              <div className="py-2">
                <div className="animate-pulse bg-gray-300 h-8 w-8 rounded-full"></div>
              </div>
              <div className="animate-pulse text-xl font-extrabold px-2 bg-gray-300 h-8 w-1/2"></div>
            </div>
            <div className="animate-pulse text-slate-500 bg-gray-300 h-4 w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
