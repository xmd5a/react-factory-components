import * as React from 'react';

import { AttachmentData, ComponentType, ErrorData } from './components';
import { ComponentsFactory } from './ComponentsFactory';
import './style.css';

const items: Array<AttachmentData | ErrorData> = [
  {
    type: ComponentType.ERROR,
    error: 'The file you’re trying to upload is not an acceptable format',
    key: 'validation',
  },
  {
    type: ComponentType.ATTACHMENT,
    status: 'uploading',
    filename: 'filename.jpg',
    key: 'attachment-uploading',
  },
  {
    type: ComponentType.ATTACHMENT,
    status: 'uploaded',
    filename: 'filename.jpg',
    key: 'attachment-uploaded',
  },
];

const factory = new ComponentsFactory();

export default function App() {
  return (
    <main>
      <h1>components factory</h1>
      {items.map((item) => {
        return factory.create(item);
      })}
    </main>
  );
}
