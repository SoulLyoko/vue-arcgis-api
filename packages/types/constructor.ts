export interface Constructor<T = any> {
  new (properties?: Record<string, unknown>): T;
}
