type Thing = {
  name: string;
  title: string;
  favoriteColors: Array<string>;
};

export function createThing(name: string): Thing {
  return {
    name,
    title: "Baron",
    favoriteColors: ["green", "blue"],
  };
}
