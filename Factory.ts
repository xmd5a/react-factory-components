import { FactoryMapper } from './FactoryMapper';

class Factory {
  private factoryMapper;

  constructor() {
    this.factoryMapper = new FactoryMapper();
  }

  // narrower type defition
  create(item) {
    return this.factoryMapper.factories[item.type].create(item);
  }
}

export { Factory };
