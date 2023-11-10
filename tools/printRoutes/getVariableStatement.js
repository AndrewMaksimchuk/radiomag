import ts from "typescript";

export const getVariableStatement = (sourceFile) => {
  const VariableStatement = sourceFile.statements.find((value) => {
    return value.kind === ts.SyntaxKind.VariableStatement;
  });
  const r = VariableStatement.declarationList.declarations[0];
  const name = r.name.escapedText;
  const initializer = r.initializer.expression.escapedText;
  if ("Router" === initializer) {
    return name;
  }
};
