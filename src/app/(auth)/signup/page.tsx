import TextField from "@/libs/text-field";
import React from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ButtonField from "@/libs/button";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="w-full gap-10 flex flex-col items-center justify-center h-full">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="font-bold text-3xl">Register Account</div>
        <div className="font-normal text-sm">
          Get your free ChapApp account now
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <div className="lg:w-[45%] w-3/4 flex flex-col items-center gap-5">
          <TextField
            startIcon={
              <MailOutlineRoundedIcon className="text-[18px] text-grey-c200 font-medium" />
            }
            placeholder="Enter your email"
          />
          <TextField
            startIcon={
              <PersonOutlineRoundedIcon className="text-[18px] text-grey-c200 font-medium" />
            }
            placeholder="Enter your username"
          />
          <TextField
            startIcon={
              <LockOutlinedIcon className="text-[18px] text-grey-c200 font-medium" />
            }
            placeholder="Enter your password"
          />
          <ButtonField label="Register" />
        </div>
        <div className="text-sm">
          <span className="text-grey-c500">Already have an account? </span>
          <Link href={"/login"} className="underline text-primary-c800">
            Login
          </Link>
        </div>
      </div>
      <div className="text-xs text-grey-c500 font-light">
        &copy; 2024 ChatApp. Crafted with ❤️ by AnhLeonard
      </div>
    </div>
  );
};

export default SignupPage;
