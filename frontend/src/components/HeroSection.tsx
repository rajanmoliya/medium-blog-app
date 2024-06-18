import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.3 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out", delay: 0.6 }
    );
  }, []);

  return (
    <div className="relative bg-gradient-to-tl from-current via-slate-600 to-current overflow-hidden h-screen">
      {/* <img
        src=""
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      /> */}
      <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            Unleash Your Creativity
          </h1>
          <p
            ref={subHeadingRef}
            className="mt-6 text-2xl sm:text-3xl text-gray-200 drop-shadow-md"
          >
            Share your stories with a global audience.
          </p>
          <div className="mt-10 transition-transform transform hover:scale-105">
            <a
              ref={buttonRef}
              href="/signup"
              className="inline-block bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg shadow-lg "
            >
              Get Started
              <span className="animate-bounce inline-block ml-1 text-white ">
                ✍️
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
