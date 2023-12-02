const getKeys = <T extends object>(item: T) => {
  return Object.keys(item) as unknown as Array<keyof T>;
};

const isEmpty = <T>(value: T) => {
  return Boolean(value);
};

const setKeyValue = <T>(checkedValue: T) => {
  return isEmpty(checkedValue) ? checkedValue : "-";
};

export function dialogPrepareData<R extends object>(data: R[] | undefined) {
  if (undefined === data) {
    return data;
  }

  return data.map((item) => {
    return getKeys<R>(item).reduce((acc, key) => {
      return { ...acc, [key]: setKeyValue(item[key]) };
    }, {});
  }) as R[];
}
