import { exec } from "child_process";

process.stdout.write("\x1Bc");
process.stdout.write("Project: Radiomag - online shop\n\n");

exec("make help", (err, out) => {
  process.stdout.write(out);
  process.stdout.write("\x1b7");
});

exec("npm run stat", (err, out) => {
  let rowNumber = 1;
  const rows = out.split("\n").splice(3);
  rows.forEach((row) => {
    process.stdout.cursorTo(80, rowNumber++);
    process.stdout.write(row);
  });
  process.stdout.write("\x1b8");
  process.stdout.write("\n");
  process.exit(0);
});
