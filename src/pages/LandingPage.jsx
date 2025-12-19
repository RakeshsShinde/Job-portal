import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1
          className="flex flex-col items-center justify-center
         gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter"
        >
          Find your dream job{" "}
          <span className="flex items-center gap-1">
            and get <img className="h-14 sm:h-24 lg:h-32" src={logo} />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find perfect candidate
        </p>
      </section>
      <div className=" flex justify-center gap-6">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find jobs
          </Button>
        </Link>
        <Link to={"/jobs"}>
          <Button variant="destructive" size="xl">
            Post Job
          </Button>
        </Link>
        {/* carosual */}
      </div>
      {/* banner */}
      <section>{/* cards */}</section>
      {/* accrodian */}
    </main>
  );
}
