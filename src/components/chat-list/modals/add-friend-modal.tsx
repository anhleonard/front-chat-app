import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Divider, Drawer } from '@mui/material';
import { lexendFont } from '@/app/layout';
import ButtonField from '@/libs/button';
import TextField from '@/libs/text-field';
import { closeChatModal } from '@/redux/slices/chatModalSlice';
import UserInforContent from './user-infor-modal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddFriendModal() {
  const data = useSelector((state: RootState) => state.chatModal);
  const [openUserInfo, setOpenUserInfo] = React.useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenUserInfo(false);
    dispatch(closeChatModal());
  };

  return (
    <BootstrapDialog
      onClose={handleCloseModal}
      aria-labelledby="customized-dialog-title"
      open={data?.isOpen as boolean}
      className={`${lexendFont.className}`}
      style={{ overflow: 'unset' }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <div className="text-base font-semibold">Add friend</div>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseModal}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <Divider />
      <DialogContent
        className={`max-h-dvh max-w-xl ${data?.className}`}
        sx={{ overflowY: 'auto' }}
      >
        <TextField placeholder="Phone number" />
      </DialogContent>
      <Divider />
      <div className="flex items-center gap-3 justify-end p-4">
        <ButtonField
          label="Cancel"
          className="py-[8px] rounded-xl"
          color="grey"
        />
        <ButtonField
          label="Search"
          className="py-[8px] rounded-xl"
          color="primary"
          handlePressButton={() => setOpenUserInfo(true)}
        />
      </div>
      <div
        id="drawer-container"
        className={`w-full h-full absolute top-0 left-0 bg-white ${
          openUserInfo ? 'block' : 'hidden'
        }`}
      >
        <Drawer
          open={openUserInfo}
          elevation={0}
          PaperProps={{
            style: {
              position: 'absolute',
              width: '100%',
              overflowY: 'hidden',
            },
          }}
          hideBackdrop
          ModalProps={{
            container: document.getElementById('drawer-container'),
            style: { position: 'absolute' },
          }}
        >
          <UserInforContent onClose={() => setOpenUserInfo(false)} />
        </Drawer>
      </div>
    </BootstrapDialog>
  );
}
