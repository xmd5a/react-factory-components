import { ComponentType } from '../types';

type ErrorProps = {
  type: ComponentType.ERROR;
  error: string;
};

type ErrorData = {
  type: ComponentType.ERROR;
  key: string;
} & ErrorProps;

export { ErrorData, ErrorProps };
