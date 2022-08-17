import { ComponentType } from '../types';

type AttachmentProps = {
  filename: string;
  status: 'uploaded' | 'uploading';
};

type AttachmentData = {
  type: ComponentType.ATTACHMENT;
  key: string;
} & AttachmentProps;

export { AttachmentData, AttachmentProps };
