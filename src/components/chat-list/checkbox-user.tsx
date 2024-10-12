import React from 'react';
import { Colors } from '@/constants/constants';
import { User } from '@/constants/enums';
import { Avatar, Button, Checkbox, Typography } from '@mui/material';

type Props = {
  user: User;
  selectedUsers: User[];
  handleCheckboxChange: any;
};

const CheckboxUser = ({ user, selectedUsers, handleCheckboxChange }: Props) => {
  return (
    <Button
      className="flex items-center justify-normal gap-3 hover:bg-grey-c50 py-1.5 rounded-lg"
      onClick={() =>
        handleCheckboxChange(user, !selectedUsers.some((u) => u.id === user.id))
      }
    >
      <Checkbox
        checked={selectedUsers.some((u) => u.id === user.id)}
        onChange={(e) => {
          handleCheckboxChange(user, e.target.checked);
        }}
        sx={{
          color: Colors.grey.c600,
          '&.Mui-checked': {
            color: Colors.primary.c900,
          },
        }}
        size="small"
      />
      <Avatar src="" alt="user-avatar" className="w-10 h-10" />
      <Typography
        textTransform={'initial'}
        className="font-normal text-sm text-grey-c900"
      >
        {user?.name}
      </Typography>
    </Button>
  );
};

export default CheckboxUser;
