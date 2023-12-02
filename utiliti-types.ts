export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
        ? ""
        : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

export type KeysOfUnion<T> = T extends unknown ? keyof T : never;
