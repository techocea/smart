import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-20 px-7 max-md:px-4 bg-white z-[-2] ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                <a>Study Destinations</a>
                <ul className="p-2">
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/australia">
                      Study in Australia
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/canada">Study in Canada</Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/united-kingdom">
                      Study in UK
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/united-states">
                      Study in USA
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/italy">Study in Italy</Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/ireland">
                      Study in Ireland
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                <Link to="/blog">Blog</Link>
              </li> */}
            </ul>
          </div>
          <Link to="/" className="flex items-center justify-center gap-x-2">
            <img src={logo} alt="logo" className="w-12 h-full" /> <span className="font-bold text-4xl text-primary">NSA</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
              <Link to="/services">Services</Link>
            </li>
            <li>
              <details>
                <summary className="hover:bg-primary hover:text-white hover:rounded-lg ">
                  Study Destinations
                </summary>
                <ul className="p-2 z-10 bg-white rounded-none">
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/australia">
                      Study in Australia
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/canada">Study in Canada</Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/united-kingdom">
                      Study in UK
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/united-states">
                      Study in USA
                    </Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/italy">Study in Italy</Link>
                  </li>
                  <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
                    <Link to="/study-destinations/ireland">
                      Study in Ireland
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            {/* <li className="hover:bg-primary hover:text-white hover:rounded-lg ">
              <Link to="/blog">Blog</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/contact">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
