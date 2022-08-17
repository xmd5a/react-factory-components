import * as React from 'react';

import { ConcreteComponentsFactory } from '../../ComponentsFactoryMapper';
import { ComponentType } from '../types';
import { Attachment } from './Attachment';
import { AttachmentProps } from './types';

class AttachmentFactory implements ConcreteComponentsFactory<AttachmentProps> {
  get type() {
    return ComponentType.ATTACHMENT;
  }

  create(props: AttachmentProps) {
    return <Attachment {...props} />;
  }
}

export { AttachmentFactory };
