import * as React from 'react';

import { ReactElement } from 'react';
import { Attachment, AttachmentProps } from './Attachment';

interface Factory {
  type: string;
  create: (props: unknown) => ReactElement;
}

// attachmentFactory.ts
class AttachmentFactory implements Factory {
  get type() {
    return 'attachment';
  }

  create(props: AttachmentProps) {
    return <Attachment {...props} />;
  }
}

// validationFactory.ts
// class ValidationFactory implements Factory {
//   get type() {
//     return 'validation';
//   }

//   create
// }

class FactoryMapper {
  private factories;

  constructor() {
    this.factories = {};
    const attachmentFactory = new AttachmentFactory();

    this.factories[attachmentFactory.type] = attachmentFactory;
  }
}

export { FactoryMapper };
