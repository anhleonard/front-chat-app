import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Chip, Collapse, Divider } from '@mui/material';
import { lexendFont } from '@/app/layout';
import ButtonField from '@/libs/button';
import TextField from '@/libs/text-field';
import { closeChatModal } from '@/redux/slices/chatModalSlice';
import InputImage from '@/libs/input-image';
import { User } from '@/constants/enums';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckboxUser from '../checkbox-user';
import { TransitionGroup } from 'react-transition-group';
import { closeGroupModal } from '@/redux/slices/groupModalSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddGroupModal() {
  const data = useSelector((state: RootState) => state.groupModal);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [previewImage, setPreviewImage] = useState('');
  const [fileImage, setFileImage] = useState<File | null>();

  const users: User[] = [
    { id: 1, name: 'Anh Leonard' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Smith' },
  ];

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeGroupModal());
  };

  const handleCheckboxChange = (user: User, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    }
  };

  const removeUser = (userId: number) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
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
        <div className="text-base font-semibold">Add group</div>
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
        <div className="flex flex-col gap-3 pb-4">
          <div className="flex items-center gap-3">
            <InputImage
              id="group-avatar"
              name="group-avatar"
              previewImage={previewImage}
              rounded="!rounded-full"
              width="!w-14"
              height="!h-14"
              onChange={(event) => {
                if (event.target.files && event.target.files?.length > 0) {
                  setFileImage(event.target.files?.[0]);
                  setPreviewImage(
                    URL.createObjectURL(event.target.files?.[0] ?? new Blob()),
                  );
                }
              }}
            />
            <TextField
              placeholder="Enter group name"
              inputClassName="!border-[1px] !py-3"
            />
          </div>
          <TextField
            placeholder="Enter name, phone number you want to find"
            inputClassName="!border-[1px] !py-3"
          />
        </div>
        <Divider />
        <div className="pt-3 flex flex-col gap-2">
          <div className="font-medium text-sm">Your friends</div>
          <div className="flex flex-col gap-2">
            {/* Hiển thị danh sách các user đã chọn theo chiều ngang */}
            <div className="flex items-center gap-2">
              <TransitionGroup
                component={null}
                className="flex flex-wrap gap-2"
              >
                {selectedUsers.map((user) => (
                  <Collapse
                    key={user.id}
                    timeout={100}
                    orientation="horizontal"
                  >
                    <Chip
                      label={user.name}
                      variant="outlined"
                      onDelete={() => removeUser(user.id)}
                      className="bg-primary-c900 text-white text-xs border-0 pr-1"
                      deleteIcon={
                        <ClearRoundedIcon className="!text-white !text-[17px] hover:!text-grey-c200" />
                      }
                    />
                  </Collapse>
                ))}
              </TransitionGroup>
            </div>
            {users?.map((user) => {
              return (
                <CheckboxUser
                  key={user?.id}
                  user={user}
                  selectedUsers={selectedUsers}
                  handleCheckboxChange={handleCheckboxChange}
                />
              );
            })}
          </div>
        </div>
      </DialogContent>
      <Divider />
      <div className="flex items-center gap-3 justify-end p-4">
        <ButtonField
          label="Cancel"
          className="py-[8px] rounded-xl"
          color="grey"
        />
        <ButtonField
          label="Create group"
          className="py-[8px] rounded-xl"
          color="primary"
        />
      </div>
    </BootstrapDialog>
  );
}
