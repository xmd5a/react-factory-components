import * as React from 'react';

import { AttachmentProps } from './types';

const Attachment = ({ filename, status }: AttachmentProps) => (
  <div style={{ border: '1px solid #5436E3' }}>
    {filename} {status}
  </div>
);

export { Attachment };
