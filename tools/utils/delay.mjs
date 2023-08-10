export const delay = (time = 2000) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
};
