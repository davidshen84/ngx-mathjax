/**
 * **Utility interfaces for internal use only!!!**
 */
export interface UpdateValue<T> {
  value: T;
  order: number;
}

export interface MathJaxConfigObject {
  [key: string]: string | number | boolean | object;
}