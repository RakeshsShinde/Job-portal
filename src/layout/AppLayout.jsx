import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function AppLayout() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-20">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">Made by Rakesh</div>
    </div>
  );
}
