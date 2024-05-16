import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-100 py-7 px-10 border-b">
        <Link to="/blogs" className="hover:text-slate-600  font-bold">
          Medium
        </Link>
        <div className="">
          <nav className="">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/signup" className="hover:text-slate-600">
                  Signup
                </a>
              </li>
              <li>
                <a href="/signin" className="hover:text-slate-600">
                  Signin
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-slate-600">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/publish" className="hover:text-slate-500">
                  Publish
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <HeroSection />
    </>
  );
}
