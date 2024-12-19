interface Container<T> {
  objA: T;
  objB: T;
}

function merge<T>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
console.log(merge);
