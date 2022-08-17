import * as React from 'react';

import { ConcreteComponentsFactory } from '../../ComponentsFactoryMapper';
import { ComponentType } from '../types';
import { Error } from './Error';
import { ErrorProps } from './types';

class ErrorFactory implements ConcreteComponentsFactory<ErrorProps> {
  get type() {
    return ComponentType.ERROR;
  }

  create(props: ErrorProps) {
    return <Error {...props} />;
  }
}

export { ErrorFactory };
