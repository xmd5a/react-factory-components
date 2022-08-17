import * as React from 'react';
import { AttachmentProps } from './types';

const Attachment = ({ filename, status }: AttachmentProps) => (
  <div>
    {filename} {status}
  </div>
);

export { Attachment, AttachmentProps };
