import React, { useState, useRef } from "react";
import menu from "./align-right-svgrepo-com.svg";
import close from "./close-circle-svgrepo-com.svg";
import logo from "./logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between py-4 md:py-0">
          <div className="flex-shrink-0 flex items-center">
            {/* <img src={logo} className="w-10 mx-2" alt="logo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mx-2"
              xmlSpace="preserve"
              id="BMW"
              x={0}
              y={0}
              style={{ enableBackground: "new 0 0 340.16 340.16" }}
              version="1.1"
              viewBox="0 0 340.16 340.16"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: "\n    .st0{fill:#6f6f6f}.st1{fill:#0066b1}\n  ",
                }}
              />
              <switch>
                <g>
                  <linearGradient
                    id="SVGID_1_"
                    x1={0}
                    x2=".707"
                    y1={0}
                    y2=".707"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0} style={{ stopColor: "#e6e6ea" }} />
                    <stop offset=".175" style={{ stopColor: "#e2e2e6" }} />
                    <stop offset=".355" style={{ stopColor: "#d6d6da" }} />
                    <stop offset=".537" style={{ stopColor: "#c1c2c5" }} />
                    <stop offset=".72" style={{ stopColor: "#a5a6a8" }} />
                    <stop offset=".903" style={{ stopColor: "#808384" }} />
                    <stop offset={1} style={{ stopColor: "#6a6d6d" }} />
                  </linearGradient>
                  <path
                    d="M170.08 0C76.15 0 0 76.15 0 170.08s76.15 170.08 170.08 170.08 170.08-76.15 170.08-170.08S264.01 0 170.08 0zM329.1 170.08c0 87.82-71.19 159.02-159.02 159.02S11.06 257.9 11.06 170.08 82.26 11.06 170.08 11.06 329.1 82.26 329.1 170.08z"
                    className="st0"
                  />
                  <path
                    d="M170.08 69.22v5.53c52.56 0 95.33 42.76 95.33 95.33h5.53c0-55.7-45.16-100.86-100.86-100.86m0 196.19c-52.56 0-95.33-42.76-95.33-95.33h-5.53c0 55.7 45.16 100.86 100.86 100.86"
                    className="st0"
                  />
                  <path
                    id="W_61_"
                    d="M252.51 97.92c2.31 2.48 5.64 6.48 7.51 8.91l34.44-21.86a229.09 229.09 0 0 0-6.51-8.08l-21.81 14.42-1.49 1.28 1.11-1.62 9.63-19.22-6.81-6.81-19.23 9.63-1.62 1.11 1.29-1.49 14.43-21.8c-2.54-2.16-4.98-4.14-8.09-6.54L233.5 80.26c2.77 2.13 6.42 5.26 8.75 7.39l20.58-10.68 1.32-.97-.97 1.32-10.67 20.6z"
                    className="st0"
                  />
                  <path
                    id="M_61_"
                    d="m174.36 54.31 9.41-21.08.6-1.87-.17 1.95.99 28.17c3.3.31 6.71.77 10.07 1.33l-1.53-41.72c-4.7-.52-9.38-.89-14.06-1.09l-9.27 23.01-.33 1.71-.33-1.71L160.48 20c-4.68.2-9.36.57-14.06 1.09l-1.53 41.72c3.36-.56 6.77-1.01 10.07-1.33l.99-28.17-.17-1.95.6 1.87 9.41 21.08h8.57z"
                    className="st0"
                  />
                  <path
                    id="B_x5F_22d_61_"
                    d="M98.25 87.56c5.44-5.73 8.52-12.35 3.08-18.67-2.96-3.43-7.93-4.18-12.05-2.49l-.41.16.13-.36c.61-1.63 1-6.83-3.43-10.42-2.16-1.75-4.87-2.4-7.61-2.12-5.11.52-9.04 4.01-19.74 15.94-3.23 3.6-7.93 9.28-10.75 12.96l29.39 27.88c9.74-10.78 13.71-14.79 21.39-22.88zM59.9 80.74c5.92-7.24 12.21-13.81 15.06-16.41.9-.82 1.88-1.64 3.07-1.96 1.93-.53 3.92.84 4.37 2.82.45 1.99-.8 3.88-2.19 5.44-3.13 3.53-14.61 15.54-14.61 15.54l-5.7-5.43zm11.51 10.92s11.18-11.82 14.83-15.6c1.45-1.5 2.38-2.41 3.38-2.9 1.29-.63 2.7-.76 3.96.08 1.24.83 1.81 2.26 1.5 3.68-.37 1.69-1.75 3.3-2.89 4.53-1.54 1.65-14.8 15.84-14.82 15.86l-5.96-5.65z"
                    className="st0"
                  />
                  <path
                    d="M170.08 69.22v100.86H69.22c0-55.74 45.12-100.86 100.86-100.86zM270.94 170.08c0 55.74-45.12 100.86-100.86 100.86V170.08h100.86z"
                    className="st1"
                  />
                </g>
              </switch>
            </svg>

            <h2 className="text-black font-bold text-lg">BMW</h2>
          </div>
          <div className="hidden md:flex items-center roboto-bold">
            <a
              className="py-4 px-3 text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              className="py-4 px-3 text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Shop
            </a>
            <a
              className="py-4 px-3 text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              Collections
            </a>
            <a
              className="py-4 px-3 text-black hover:text-gray-200 cursor-pointer"
              onClick={closeMenu}
            >
              About Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <img src={close} className="w-6 h-6" alt="menu" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="text-white focus:outline-none"
              >
                <img src={menu} className="w-6 h-6" alt="menu" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden w-full fixed bg-white shadow-lg z-20"
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 roboto-medium">
            <a
              className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
              onClick={closeMenu}
            >
              Shop
            </a>
            <a
              className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
              onClick={closeMenu}
            >
              Collections
            </a>
            <a
              className="text-black block hover:text-gray-200 cursor-pointer text-center border rounded-md"
              onClick={closeMenu}
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
