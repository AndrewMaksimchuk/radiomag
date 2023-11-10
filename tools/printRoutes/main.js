import { readFileSync } from "fs";
import ts from "typescript";
import { getVariableStatement } from "./getVariableStatement.js";
import { getExpressionStatement } from "./getExpressionStatement.js";
import { printed } from "./printed.js";

export const main = (files) => {
  process.stdout.write(`\nRoutes:\n`.toUpperCase());

  files.forEach((fileName) => {
    const sourceFile = ts.createSourceFile(
      fileName,
      readFileSync(fileName).toString(),
      ts.ScriptTarget.ES2015,
      true
    );

    const name = getVariableStatement(sourceFile);
    if (name === undefined) {
      return;
    }

    const expressionStatement = getExpressionStatement(sourceFile, name);
    printed(fileName, expressionStatement);
  });
};
