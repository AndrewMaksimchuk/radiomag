#!/usr/bin/node

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import ts from "typescript";
import { endpoints } from "../endpoints/nodeEndpoints.js";

const cwd = process.cwd();
const path = join(cwd, "src", "routes");
const files = readdirSync(path)
  .filter((value) => !value.includes("index"))
  .map((value) => join(path, value));

const getVariableStatement = (sourceFile) => {
  const VariableStatement = sourceFile.statements.find(
    (value) => value.kind === ts.SyntaxKind.VariableStatement
  );
  const r = VariableStatement.declarationList.declarations[0];
  const name = r.name.escapedText;
  const initializer = r.initializer.expression.escapedText;
  if (initializer === "Router") return name;
};

const getExpressionStatement = (sourceFile, name) => {
  const ExpressionStatement = sourceFile.statements.filter(
    (value) => value.kind === ts.SyntaxKind.ExpressionStatement
  );
  return ExpressionStatement.map((value) => value.expression)
    .map((value) => {
      return {
        expression: value.expression.expression.escapedText,
        method: value.expression.name.escapedText,
        endpoint: value.arguments[0].name.escapedText,
      };
    })
    .filter((value) => value.expression === name);
};

const printed = (fileName, expressionStatement) => {
  const methods = expressionStatement
    .map(
      (value) =>
        `[${value.method.toUpperCase()}] http://localhost:3000${
          endpoints[value.endpoint]
        }`
    )
    .join("\n");
  const text = `file://${fileName}`;
  console.log(methods);
  console.log(text);
  console.log();
};

const main = (files) => {
  console.log(`\nRoutes:\n`.toUpperCase());

  files.forEach((fileName) => {
    const sourceFile = ts.createSourceFile(
      fileName,
      readFileSync(fileName).toString(),
      ts.ScriptTarget.ES2015,
      true
    );

    const name = getVariableStatement(sourceFile);
    if (name === undefined) return;

    const expressionStatement = getExpressionStatement(sourceFile, name);
    printed(fileName, expressionStatement);
  });
};

main(files);
