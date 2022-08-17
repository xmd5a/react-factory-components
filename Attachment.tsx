import * as React from 'react';

type AttachmentProps = {
  status: string;
};

const Attachment = ({ status }: AttachmentProps) => {
  return <span>Attachment {status}</span>;
};

export { Attachment, AttachmentProps };
