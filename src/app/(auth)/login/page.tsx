'use client';
import ButtonField from '@/libs/button';
import Link from 'next/link';
import React, { useState } from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@/libs/text-field';
import { getMe, loginUser } from '@/apis/services/auth';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await loginUser({ email, password });
    if (res) {
      router.push('/');
    }
    return res;
  };

  return (
    <div className="w-full gap-12 flex flex-col items-center justify-center h-full">
      <div className="w-full flex flex-col items-center gap-2">
        <div className="font-bold text-3xl">Welcome Back!</div>
        <div className="font-normal text-sm">Log in to continue to ChatApp</div>
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <div className="lg:w-[45%] w-3/4 flex flex-col items-center gap-5">
          <TextField
            startIcon={
              <MailOutlineRoundedIcon className="text-[18px] text-grey-c200 font-medium" />
            }
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            startIcon={
              <LockOutlinedIcon className="text-[18px] text-grey-c200 font-medium" />
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonField
            label="Log In"
            handlePressButton={() => {
              handleLogin();
            }}
          />
        </div>
        <div className="text-sm">
          <span className="text-grey-c500">Don't have an account? </span>
          <Link href={'/signup'} className="underline text-primary-c800">
            Register
          </Link>
        </div>
      </div>
      <div className="text-xs text-grey-c500 font-light">
        &copy; 2024 ChatApp. Crafted with ❤️ by AnhLeonard
      </div>
    </div>
  );
};

export default LoginPage;
