import ts from "typescript";

export const getExpressionStatement = (sourceFile, name) => {
  const ExpressionStatement = sourceFile.statements.filter((value) => {
    return value.kind === ts.SyntaxKind.ExpressionStatement;
  });
  return ExpressionStatement.map((value) => {
    return value.expression;
  })
    .map((value) => {
      return {
        expression: value.expression.expression.escapedText,
        method: value.expression.name.escapedText,
        endpoint: value.arguments[0].name.escapedText,
      };
    })
    .filter((value) => {
      return value.expression === name;
    });
};
