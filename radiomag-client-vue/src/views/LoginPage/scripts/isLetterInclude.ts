export const isLetterInclude = (value: string) => {
  const letters = [...value].filter((letter) => {
    if ("+" === letter) {
      return;
    }

    if (Number.isNaN(parseInt(letter))) {
      return letter;
    }
  });
  return Boolean(letters.length);
};
