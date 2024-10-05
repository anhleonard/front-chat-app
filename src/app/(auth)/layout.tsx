"use client";
import SideBar from "@/components/auth/sidebar";
import React from "react";
import { lexendFont } from "../layout";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${lexendFont.className} bg-primary-c600 h-screen`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 h-full">
        <div className="col-span-1 text-white hidden md:block">
          <SideBar />
        </div>
        <div className="md:col-span-1 lg:col-span-2 bg-white h-full text-black rounded-xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
