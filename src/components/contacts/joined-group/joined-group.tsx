import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Avatar, IconButton, Popover, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openInforModal } from '@/redux/slices/inforModalSlice';

const GroupItem = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpenInforModal = () => {
    const modal = {
      isOpen: true,
    };
    dispatch(openInforModal(modal));
  };

  return (
    <div className="flex items-center justify-between py-3 hover:bg-grey-c30 cursor-pointer pl-3 pr-2">
      <div className="flex items-center gap-3">
        <Avatar
          alt="group-image"
          src="/images/cute-girl.jpg"
          className="border border-white w-12 h-12"
        />
        <div className="flex flex-col gap-1">
          <div className="font-medium">Exploding group</div>
          <div className="text-xs text-grey-c500">123 members</div>
        </div>
      </div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <MoreVertRoundedIcon className="w-5 h-5" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          '.MuiPaper-root': {
            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <div className="divide-y-[1px]">
          <div onClick={() => handleOpenInforModal()}>
            <Typography className="text-sm py-3 px-3 cursor-pointer hover:bg-grey-c30 w-[170px] active:bg-grey-c100 transition duration-300">
              Leave group
            </Typography>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default GroupItem;
