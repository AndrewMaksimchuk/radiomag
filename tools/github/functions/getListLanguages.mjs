export const getListLanguages = (repoListLnags) => {
  return `Languages: ${Object.keys(repoListLnags["data"])}\n`;
};
