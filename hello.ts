import ts = require('typescript');

const code = "enum { x = 1 }"
const sourceFile = ts.createSourceFile('x.ts', code, ts.ScriptTarget.Latest, true);

let indent = 0;
function print(node: ts.Node) {
  console.log(new Array(indent + 1).join(' ') + ts.SyntaxKind[node.kind]);
  indent++;
  ts.forEachChild(node, print);
  indent--;
}

print(sourceFile);
