export default function HeroSection() {
  return (
    <div className="bg-slate-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Welcome to Our Blogging Platform
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-600">
          Discover and share stories from writers around the world.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
