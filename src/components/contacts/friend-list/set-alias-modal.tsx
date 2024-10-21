import TextField from '@/libs/text-field';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

const SetAliasModal = () => {
  const [alias, setAlias] = useState('Anh Leonard');
  return (
    <div className="flex flex-col items-center py-4 gap-4 px-14">
      <Avatar
        alt="friend-image"
        src="/images/cute-girl.jpg"
        className="w-20 h-20"
      />
      <div className="flex flex-col items-center text-sm">
        <div>
          Choose a memorable name for{' '}
          <span className="font-medium">Anh Leonard</span>
        </div>
        <div>Notice: This alias will only be shown to you.</div>
      </div>
      <TextField
        placeholder="Enter alias you want to set"
        inputClassName="!py-3"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
    </div>
  );
};

export default SetAliasModal;
