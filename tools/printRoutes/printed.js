import { endpoints } from "../../endpoints/nodeEndpoints.js";

const method = (value) => {
  return `[${value.method.toUpperCase()}]`;
};

const endpoint = (value) => {
  return `http://localhost:3000${endpoints[value.endpoint]}`;
};

export const printed = (fileName, expressionStatement) => {
  const methods = expressionStatement
    .map((value) => {
      const methodName = method(value);
      const url = endpoint(value);
      return `${methodName} ${url}`;
    })
    .join("\n");
  const text = `file://${fileName}`;
  process.stdout.write(methods + "\n");
  process.stdout.write(text + "\n");
  process.stdout.write("\n");
};
