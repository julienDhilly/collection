import _ from "lodash";

export interface Collection<T> {
  /**
   * https://lodash.com/docs/4.17.15#chunk
   * Creates an array of elements split into groups the length of size. If array can't be split evenly,
   * the final chunk will be the remaining elements.
   * @param size
   */
  chunk(size?: number): Collection<T[]>;

  /**
   * https://lodash.com/docs/4.17.15#concat
   * Creates a new array concatenating array with any additional arrays and/or values.
   */
  compact(): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#difference
   * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
   * The order and references of result values are determined by the first array.
   * @param values
   */
  difference(values: Collection<T> | Array<T>): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#differenceBy
   * This method is like Collection.difference except that it accepts iteratee which is invoked for each element
   * of array and values to generate the criterion by which they're compared. The order and references of result
   * values are determined by the first array.
   * The iteratee is invoked with one argument: (value).
   * @param values
   * @param iteratee
   */
  differenceBy(
    values: Collection<T> | Array<T>,
    iteratee?: Function
  ): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#differenceWith
   * This method is like Collection.difference except that it accepts comparator which is invoked to compare elements
   * of array to values. The order and references of result values are determined by the first array. The comparator
   * is invoked with two arguments: (arrVal, othVal).
   * @param values
   * @param comparator
   */
  differenceWith(values: Collection<T> | Array<T>, comparator: Function);

  /**
   * https://lodash.com/docs/4.17.15#drop
   * Creates a slice of array with n elements dropped from the beginning.
   * @param n
   */
  drop(n?: number): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#dropRight
   * Creates a slice of array with n elements dropped from the end.
   * @param n
   */
  dropRight(n?: number): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#dropRightWhile
   * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey.
   * The predicate is invoked with three arguments: (value, index, array).
   * @param predicate
   */
  dropRightWhile(predicate?: Function): Collection<T>;

  /**
   * https://lodash.com/docs/4.17.15#dropWhile
   * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey.
   * The predicate is invoked with three arguments: (value, index, array).
   * @param predicate
   */
  dropWhile(predicate?: Function): Collection<T>;

  flatten(): Collection<T>;
  first(): T | undefined;
}

export class Collection<T> extends Array<T> {
  public static from<T>(iterable: T[]): Collection<T> {
    return new Collection(...iterable);
  }
}

const collectionMethods = [
  "chunk",
  "compact",
  "difference",
  "differenceBy",
  "differenceWith",
  "drop",
  "dropRight",
  "dropRightWhile",
  "dropWhile",

  // TODO: add the methods below to the interface
  "findLastIndex",
  "first", // alias of head
  "fatten",
  "flattenDeep",
  "flattenDepth",
  "fromPairs",
  "head",
  "initial",
  "intersection",
  "intersectionBy",
  "intersectionWith",
  "last",
  "lastIndexOf",
  "nth",
  "pull",
  "pullAll",
  "pullAllBy",
  "pullAllWith",
  "pullAt",
  "remove",
  "sortedIndex",
  "sortedIndexBy",
  "sortedIndexOf",
  "sortedLastIndex",
  "sortedLastIndexBy",
  "sortedLastIndexOf",
  "sortedUniq",
  "sortedUniqBy",
  "tail",
  "take",
  "takeRight",
  "takeRightWhile",
  "takeWhile",
  "union",
  "unionBy,",
  "unionWith",
  "uniq",
  "uniqBy",
  "uniqWith",
  "unzip",
  "unzipWith",
  "without",
  "xor",
  "xorBy",
  "xorWith",
  "zip",
  "zipObject",
  "zipObjectDeep",
  "zipWith",

  // lodash Collection methods
  "countBy",
  "forEachRight",
  "findLast",
  "flatMap",
  "flatMapDeep",
  "groupBy",
  "invokeMap",
  "keyBy",
  "orderBy",
  "partition",
  "reduceRight",
  "reject",
  "sample",
  "sampleSize",
  "shuffle",
  "sortBy",
];

collectionMethods.forEach((method: string) => {
  Collection.prototype[method] = function (...args: any) {
    const result = _[method].call(undefined, this, ...args);
    return Array.isArray(result) ? Collection.from(result) : result;
  };
});
