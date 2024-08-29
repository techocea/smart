import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-[#F6F5F2] h-full py-16 px-10">
      <div className="flex max-md:flex-col gap-12 lg:justify-center lg:items-start">
        <div className="max-w-[580px] lg:w-[680px] flex flex-col gap-y-1 max-md:gap-y-5 lg:gap-y-2">
          <h6 className="uppercase font-bold text-sm lg:text-[16px] text-[#46145e]">
            about
            <br />{" "}
            <span className="text-3xl max-md:text-2xl max-md:mt-2">
              Negombo Smart Achievers
            </span>
          </h6>
          <p className="text-sm font-medium text-slate-700 leading-normal lg:leading-relaxed">
            Welcome to the place where your study abroad dream comes true.
            <br />
            At Negombo Smart Achievers, we offer a comprehensive range of
            services designed to facilitate your academic journey. Our expert
            team provides top-tier counseling services to guide you in selecting
            the optimal course at the right university.
          </p>
          <div className="mt-3 min-w-10">
            <Link
              to="/about"
              className="flex gap-x-1.5 items-center font-medium"
            >
              <button className="btn btn-primary">
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="p-4 flex max-w-[390px] lg:w-[500px] flex-col gap-3 lg:gap-5 items-center justify-center text-center">
          <h1 className="italic capitalize text-xl lg:text-2xl font-semibold text-secondary">
            company vision
          </h1>
          <p className="italic text-secondary text-sm font-semibold">
            "At Negombo Smart Achievers, we illuminate the path to global
            education, turning aspiration into achievements through personalized
            guidance, academic excellence and unwavering support"
          </p>
        </div>
      </div>
    </div>
  );
}
