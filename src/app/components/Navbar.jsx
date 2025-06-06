"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AppContext } from "../context/AppContext";
import jwtDecode from "jwt-decode"; // Import if you want to decode the token
import { useAuth } from "./../context/AuthContext";

export default function Navbar() {
  const { userData } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const { setIsOpen } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname();

  console.log(userData , 9999999)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Check if the user is logged in by checking the token in cookies or local storage
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1]; // Extract token from cookies
    console.log(token, 555555)

    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the token if needed
        const currentTime = Date.now() / 1000;
        if (decoded.exp > currentTime) {
          setIsLoggedIn(true); // Token is valid, user is logged in
        } else {
          setIsLoggedIn(false); // Token is expired
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false); // No token found
    }
  }, []);

  const handleLogout = () => {
    // Clear the token from cookies or local storage
    document.cookie = "token=; Max-Age=0"; // Clear the token cookie
    setIsLoggedIn(false);
    router.push("/login"); // Redirect to login page
  };

  return (
    <div
      className={`flex justify-center fixed top-0 w-full z-10 ${
        pathname === "/"
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div
        className={`flex py-4 justify-between pl-3 pr-4 max-w-7xl md:px-10 lg:px-14 xl:px-20 w-full items-center`}
      >
        <div className="flex items-center">
          <img
            onClick={() => {
              router.push("/");
            }}
            src="/Icons/heartlogo.png"
            alt=""
            className="h-[50px] cursor-pointer"
          />
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-[35px] text-[14px] cursor-pointer">
            <Link href={"/"} className="hover:text-[#EF5744]">
              Home
            </Link>
            <Link href={"/search"} className="hover:text-[#EF5744]">
              Search
            </Link>
            <Link href={"/"} className="hover:text-[#EF5744]">
              About us
            </Link>
            <Link href={"/"} className="hover:text-[#EF5744]">
              Type of Cares
            </Link>
            {/* <Link href={"/"} className="hover:text-[#EF5744]">
              Blogs
            </Link> */}
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-[26px]">
          {userData ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-[#EF5744] px-[19px] py-[8px] rounded-full text-[#fff] text-[14px] cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() => {
                  router.push("/login");
                }}
                className="text-[14px] cursor-pointer hover:text-[#EF5744]"
              >
                Login
              </span>
              <button
                onClick={() => {
                  router.push("/signup");
                }}
                className="bg-[#EF5744] px-[19px] py-[8px] rounded-full text-[#fff] text-[14px] cursor-pointer"
              >
                Join now
              </button>
            </>
          )}
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="md:hidden flex flex-col items-end cursor-pointer transition-all duration-500"
        >
          <span className="block h-[3px] w-5 bg-[#000]"></span>
          <span className="block h-[3px] w-7.5 bg-[#000] mt-2"></span>
          <span className="block h-[3px] w-5 bg-[#000] mt-2"></span>
        </div>
      </div>
    </div>
  );
}