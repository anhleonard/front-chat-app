// Modal
export type ModalState = {
  isOpen?: boolean;
  title: string;
  content: React.ReactNode;
  buttons?: React.ReactNode | null;
  className?: string;
};

export type RawModalState = {
  isOpen: boolean;
  className?: string;
};

export type User = {
  id: number;
  name: string;
};
