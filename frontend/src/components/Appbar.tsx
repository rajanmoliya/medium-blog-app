export default function Appbar() {
  return (
    <div className="flex justify-between items-center px-10 border-b py-4">
      <div className="font-bold">Medium</div>
      <div>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {"user"[0].toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
