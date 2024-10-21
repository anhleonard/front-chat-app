import { lexendFont } from '@/app/layout';
import { closeInforModal } from '@/redux/slices/inforModalSlice';
import { RootState } from '@/redux/store';
import { Dialog, styled } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInforContent from '../chat-list/modals/user-infor-modal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const UserInforModal = () => {
  const data = useSelector((state: RootState) => state.inforModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeInforModal());
  };

  return (
    <BootstrapDialog
      onClose={handleCloseModal}
      aria-labelledby="customized-dialog-title"
      open={data?.isOpen as boolean}
      className={`${lexendFont.className}`}
      style={{ overflow: 'unset' }}
    >
      <UserInforContent hasBack={false} />
    </BootstrapDialog>
  );
};

export default UserInforModal;
