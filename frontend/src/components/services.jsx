import React,{useEffect} from "react";

import { Link } from "react-router-dom";

import Map from "./map";

import { ServiceData } from "../utils/constants";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#FFF7F1] h-full lg:py-24 py-10 max-md:px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-5">
          <h3 className="text-secondary text-2xl  font-bold">
            SERVICES WE OFFER
          </h3>
          <p className="text-grey">
            With you at every step - from one point to another
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-8">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="card shadow-xl"
              style={{
                backgroundColor: item.bgColor,
              }}
            >
              <div className="card relative h-28 w-40">
                <img
                  src={item.image}
                  className="absolute w-full  flex items-center justify-center  object-cover"
                  alt="Album"
                />
              </div>
              <div className="card-body mt-10">
                <h2 className="text-center text-xl text-black">
                  {item.heading}
                </h2>
                <button className="btn btn-link">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-auto py-20 items-center justify-center">
        <div className="text-center mt-20">
          <h3 className="text-secondary  text-2xl  font-bold">CONTACT</h3>
          <p className="text-grey">We`d like to hear from you...</p>
        </div>
        <div className="flex max-md:flex-col items-center justify-center">
          {/* social icons */}

          {/* Get In Touch */}
          <div className="bg-white w-auto h-full p-4 shadow-lg text-gray-700 shadow-slate-200 rounded-lg">
            <h1 className="capitalize text-7xl font-bold  text-slate-500 border-b pb-2">
              Get in <br />
              Touch
            </h1>
            <div className="flex flex-col gap-y-6 py-2">
              <div className="flex items-center gap-x-4 mt-[3rem]">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    clipRule="evenodd"
                  >
                    <path d="M20 23h2v1h-20v-1h2v-23h16v23zm-1-22h-14v22h14v-22zm-10 11v1h-3v-1h3z" />
                  </svg>
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Meet Us</h4>
                  <p>Negombo,Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Call Us</h4>
                  <p>(076) 148 6266</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Email Us</h4>
                  <p>info@negombosmartachievers.lk</p>
                </div>
              </div>
            </div>
          </div>
          {/* google map */}
          <div>
            <Map />
          </div>
        </div>
        <div className="mt-3">
          <Link to="/contact">
            <button className="btn btn-primary">CONTACT NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
