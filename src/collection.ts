import _ from "lodash";
export interface Collection<T> {
  chunk(size: number): Collection<T[]>;
  compact(): Collection<T>;
  difference(...values: Collection<T> | Array<T>): Collection<T>;
  flatten(): Collection<T>;
  first(): T | undefined;
}

export class Collection<T> extends Array<T> {
  public static from<T>(iterable: T[]): Collection<T> {
    return new Collection(...iterable);
  }
}

const collectionMethods = ["chunk", "compact", "difference", "fatten", "first"];
collectionMethods.forEach((method: string) => {
  Collection.prototype[method] = function (...args: any) {
    const result = _[method].call(undefined, this, ...args);
    return Array.isArray(result) ? Collection.from(result) : result;
  };
});
