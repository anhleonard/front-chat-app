import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { ChangeEvent, MouseEvent } from 'react';
import { Avatar } from '@mui/material';

type InputImageProps = {
  id: string;
  name: string;
  previewImage: string;
  width?: string;
  height?: string;
  rounded?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage?: (event: MouseEvent<HTMLDivElement>) => void;
};

export default function InputImage({
  id,
  name,
  previewImage,
  onChange,
  width = '!w-[250px]',
  height = '!h-[250px]',
  rounded = '!rounded-2xl',
}: InputImageProps) {
  return (
    <div>
      <div className="relative">
        {previewImage ? (
          <Avatar
            src={previewImage}
            alt="image"
            className="w-14 h-14 object-cover"
          />
        ) : null}
        {previewImage ? (
          <div
            onClick={() => document.getElementById(`${id}`)?.click()}
            className="absolute inset-0 hover:bg-grey-c50 hover:opacity-60 opacity-0 cursor-pointer rounded-full transition duration-300 flex items-center justify-center"
          >
            <FileUploadOutlinedIcon
              style={{
                width: '26px',
                height: '26px',
              }}
              className="text-grey-c900"
            />
          </div>
        ) : null}
      </div>
      {!previewImage && (
        <div
          onClick={() => document.getElementById(`${id}`)?.click()}
          className={`${width} ${height} ${rounded} flex flex-col items-center justify-center border-[1px] border-grey-c50 hover:cursor-pointer hover:bg-grey-c10`}
        >
          <FileUploadOutlinedIcon
            style={{
              width: '20px',
              height: '20px',
            }}
            className="text-grey-c200"
          />
        </div>
      )}
      <div className="hidden items-center">
        <input
          type="file"
          accept="image/*"
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
