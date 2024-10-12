import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import { Divider } from "@mui/material";
import { lexendFont } from "@/app/layout";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function BaseModal() {
  const modalData = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <BootstrapDialog
      onClose={handleCloseModal}
      aria-labelledby="customized-dialog-title"
      open={modalData?.isOpen as boolean}
      className={lexendFont.className}
    >
      <DialogTitle
        className="text-base font-semibold"
        sx={{ m: 0, p: 2 }}
        id="customized-dialog-title"
      >
        {modalData?.title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseModal}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <Divider />
      <DialogContent className={`max-h-dvh max-w-xl ${modalData?.className}`}>
        {modalData?.content}
      </DialogContent>
      {modalData?.buttons ? <Divider /> : null}
      {modalData?.buttons ? (
        <div className="py-3 px-2">
          {modalData?.buttons ? modalData?.buttons : null}
        </div>
      ) : null}
    </BootstrapDialog>
  );
}
