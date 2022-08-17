import * as React from 'react';
import { Factory } from './Factory';
import './style.css';

const items = [
  {
    type: 'attachment',
    status: 'uploading',
  },
];

const factory = new Factory();

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
