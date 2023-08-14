export const animationStart = () => {
  process.stdout.write("Working.");
  return setInterval(() => {
    process.stdout.write(".");
  }, 1000);
};

export const animationStop = (intervalId) => {
  clearInterval(intervalId);
  process.stdout.write("\nDone\n");
};
