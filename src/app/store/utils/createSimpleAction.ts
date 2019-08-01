import { BaseAction } from '../Actions';

export function createSimpleAction<T>(type: T): () => BaseAction<T> {
  return () => {
    return {
      type,
    };
  };
}
