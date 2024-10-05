import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToolItem from "./tool-item";
import { faComment, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToolApp = () => {
  return (
    <div className="py-4 px-3 flex flex-col gap-4">
      <Link href={"/"}>
        <Image
          src={"/images/chatapp-logo.svg"}
          alt="chat-app-logo"
          width={40}
          height={40}
          className="hover:cursor-pointer"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <ToolItem icon={faComment} title="Messages" />
        <ToolItem icon={faAddressBook} title="Contacts" />
        <ToolItem icon={faBars} title="Settings" />
      </div>
      <div>
        <Image
          src={"/images/avatar.jpg"}
          alt="chat-app-logo"
          width={40}
          height={40}
          className="hover:cursor-pointer border border-primary-c50 rounded-full"
        />
      </div>
    </div>
  );
};

export default ToolApp;
