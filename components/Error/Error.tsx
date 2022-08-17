import * as React from 'react';

import { ErrorProps } from './types';

const Error = ({ error }: ErrorProps) => (
  <div style={{ border: '1px solid #FA6568', color: '#E3340B' }}>{error}</div>
);

export { Error };
