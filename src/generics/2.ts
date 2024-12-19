type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function mergeObjects<
  T extends Partial<Pick<AllType, "name" | "color">>,
  U extends Partial<Pick<AllType, "position" | "weight">>
>(obj1: T, obj2: U): AllType {
  return {
    name: obj1.name ?? "DefaultName",
    color: obj1.color ?? "DefaultColor",
    position: obj2.position ?? 0,
    weight: obj2.weight ?? 0,
  };
}

const obj1 = { name: "TypeScript", color: "Blue" };
const obj2 = { position: 42, weight: 100 };

const result = mergeObjects(obj1, obj2);

console.log(result);
