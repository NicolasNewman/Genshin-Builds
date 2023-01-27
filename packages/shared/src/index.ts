export * from "./data";

/**
 * Object.entries alternative that preserves key typing
 * @param obj
 * @returns array of [key, value] pairs with the type of the key preserved
 */
export function getEntries<T extends object>(obj: T) {
  return Object.entries(obj) as {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
}

/**
 * Converts a string to a valid GOOD key
 * @param str
 * @returns valid GOOD key
 */
export function toGoodKey(str: string) {
  return str
    .replace(/"|'|-/g, "") // remove invalid characters
    .split(" ") // split by word
    .map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
    .join(""); // rejoin
}

export function toStringArray(arr: any[]) {
  return arr.map((v) => v.toString());
}

/**
 *
 * @param arr array of input values
 * @returns object with each array value as a key mapping to a number
 */
export function toIdedObj<T extends string>(arr: T[]) {
  const obj = arr.reduce((obj, curr, i) => {
    obj[curr] = i + 1;
    return obj;
  }, {} as { [key in T | "_"]: number });
  obj["_"] = 0;
  return obj;
}

/**
 * @param number base 2 number
 * @param length required length of the number
 * @returns input number with the required number of 0's padded to the start
 */
export function binPad(number: string | number, length: number) {
  if (typeof number === "string") {
    return "0".repeat(length).substr(number.length) + number;
  } else {
    const n = number.toString(2);
    return "0".repeat(length).substr(n.length) + n;
  }
}

/**
 * Truncates a character name with long prefixes
 * i.e.:
 * SangonomiaKokomi -> Kokomi
 * YunJin -> Yun Jin
 * KujoSara -> Kujo Sara
 *
 * @param name - character name
 * @returns - character name which is truncated if the prefix is to long (>= 8 characters)
 */
export function truncateName(name: string) {
  const parts = name.match(/[A-Z][a-z]+/g);
  if (parts && parts.length == 2 && parts[0].length >= 8) {
    return parts[1];
  } else if (parts && parts.length == 2) {
    return parts.join(" ");
  } else if (parts) {
    return parts.join(" ");
  } else {
    return name;
  }
}

export function truncateWeapon(weapon: string) {
  if (weapon === "ThrillingTalesOfDragonSlayers") {
    return "Thrilling Tales";
  }
  return weapon;
}

/**
 * Seperates a camel cased string into seperate words
 * i.e.:
 * SangonomiaKokomi -> Sangonomia Kokomi
 * SacrificialFragments -> Sacrificial Fragments
 *
 * @param name - camel case string
 * @returns - input string seperated into words
 */
export function seperateCamelCase(str: string) {
  return str.match(/[A-Z][a-z]+/g)?.join(" ");
}

/**
 * Converts a GOOD ascension level (0-6) to the corresponding level cap in-game
 * @param ascension - the GOOD ascension id
 * @returns - a number indicating the maximum level at the given ascension ID
 */
export function getAcensionLevel(ascension: number) {
  switch (ascension) {
    case 0:
      return 20;
    case 1:
      return 40;
    default:
      return 30 + 10 * ascension;
  }
}
