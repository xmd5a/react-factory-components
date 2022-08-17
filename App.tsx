import * as React from 'react';

import { AttachmentData, ComponentType } from './components';
import { ComponentsFactory } from './ComponentsFactory';
import './style.css';

const items: Array<AttachmentData> = [
  // {
  //   type: ItemType.ERROR,
  //   error: 'The file you’re trying to upload is not an acceptable format',
  //   key: 'validation'
  // },
  // {
  //   type: ItemType.ATTACHMENT,
  //   status: 'uploading',
  //   filename: 'filename.jpg',
  //   key: 'attachment'
  // },
  {
    type: ComponentType.ATTACHMENT,
    status: 'uploaded',
    filename: 'filename.jpg',
    key: 'attachment',
  },
];

const factory = new ComponentsFactory();

export default function App() {
  return (
    <div>
      <h1>components factory</h1>
      <div>
        {items.map((item) => {
          return factory.create(item);
        })}
      </div>
    </div>
  );
}
