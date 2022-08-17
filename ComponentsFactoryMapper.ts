import { ReactElement } from 'react';

import { AttachmentFactory, ErrorFactory } from './components';

interface ConcreteComponentsFactory<T> {
  type: string;
  create: (props: T) => ReactElement;
}

class FactoryComponentsMapper {
  factories: Record<string, unknown>;

  constructor() {
    this.factories = {};
    const attachmentFactory = new AttachmentFactory();
    const errorFactory = new ErrorFactory();

    this.factories[attachmentFactory.type] = attachmentFactory;
    this.factories[errorFactory.type] = errorFactory;
  }
}

export { FactoryComponentsMapper, ConcreteComponentsFactory };
