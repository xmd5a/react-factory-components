import {
  ConcreteComponentsFactory,
  FactoryComponentsMapper
} from './ComponentsFactoryMapper';

const isComponentsFactoryInstance = (
  factory: any
): factory is ConcreteComponentsFactory<unknown> => {
  if ('create' in factory) {
    return true;
  }

  return false;
};

class ComponentsFactory {
  private factoryMapper;

  constructor() {
    this.factoryMapper = new FactoryComponentsMapper();
  }

  create(item: any) {
    const { type, ...restProps } = item;
    const mapper = this.factoryMapper.factories[type];

    if (isComponentsFactoryInstance(mapper)) {
      return mapper.create(restProps);
    }

    throw new Error(`Factory for ${item.type} not found`);
  }
}

export { ComponentsFactory };
