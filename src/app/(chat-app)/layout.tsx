"use client";
import React from "react";
import ToolApp from "@/components/tools/tool-app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { lexendFont } from "../layout";
config.autoAddCss = false;

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${lexendFont.className} flex h-screen`}>
      <ToolApp />
      <div className="border-l border-l-grey-c100 flex-1 h-screen rounded-2xl px-3 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
