export const animationStart = () => {
  process.stdout.write("Working\n");
  return setInterval(() => {
    process.stdout.write(".");
  }, 1000);
};

export const animationStop = (intervalId) => {
  clearInterval(intervalId);
  process.stdout.write("\nDone\n");
};
