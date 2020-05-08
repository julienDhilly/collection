import { Collection } from "../src/collection";
import _ from "lodash";

describe("Collection class", () => {
  it("should return instance of Collection", () => {
    const collection = new Collection();
    expect(collection).toBeInstanceOf(Collection);
    expect(collection).toBeInstanceOf(Array);
  });
  it("could be instantiated from an array", () => {
    const collection = Collection.from([1, "a", {}]);
    expect(collection).toBeInstanceOf(Collection);
    const collection2 = new Collection(1, 2, 3, 4, 5);
    expect(collection2).toBeInstanceOf(Collection);
  });
  it("should have the same content as the array instance", () => {
    const myArray = [1, 2, 3, 4];
    const myCollection = Collection.from(myArray);
    expect(myCollection).toEqual(myArray);
  });
});

describe("Collection public methods", () => {
  it("should return the same result as lodash", () => {
    const myArray = [1, 2, 3, 4, 5];
    const lodashResult = _.first(myArray);
    const myCollection = Collection.from(myArray);
    const collectionResult = myCollection.first();
    expect(lodashResult).toEqual(collectionResult);
  });
});
