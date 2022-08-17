import { ReactElement } from 'react';

import { AttachmentFactory } from './components';

interface ConcreteComponentsFactory<T> {
  type: string;
  create: (props: T) => ReactElement;
}

class FactoryComponentsMapper {
  factories: Record<string, unknown>;

  constructor() {
    this.factories = {};
    const attachmentFactory = new AttachmentFactory();
    // const validationFactory = new ValidationFactory();

    this.factories[attachmentFactory.type] = attachmentFactory;
    // this.factories[validationFactory.type] = validationFactory;
  }
}

export { FactoryComponentsMapper, ConcreteComponentsFactory };
