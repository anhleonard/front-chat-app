"use client";
import { inconsolataFont } from "@/app/layout";
import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="text-white flex flex-col items-center py-2 h-full">
      <div className="flex items-center gap-4">
        <Image
          src={"/images/chatapp-logo.svg"}
          alt="chat-app-logo"
          width={80}
          height={80}
        />
        <div>
          <div className={`${inconsolataFont.className} text-4xl`}>ChatApp</div>
          <div className="font-thin text-sm">Bring you into a new world</div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={"/images/auth-image.svg"}
          alt="auth-image"
          width={270}
          height={270}
        />
      </div>
    </div>
  );
};

export default SideBar;
