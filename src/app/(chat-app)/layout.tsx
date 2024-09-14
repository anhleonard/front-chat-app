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
      <div className="border border-l-grey-c100 flex-1 h-full rounded-2xl p-3">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
