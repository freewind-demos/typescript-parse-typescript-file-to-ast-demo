import ts from 'typescript';

const filePath = './sample.ts';
const program = ts.createProgram([filePath], {allowJs: false});
const sourceFile: ts.SourceFile = program.getSourceFile(filePath)!;

let indent = 0;

function print(node: ts.Node) {
  console.log(new Array(indent + 1).join(' ') + ts.SyntaxKind[node.kind]);
  indent++;
  ts.forEachChild(node, print);
  indent--;
}

print(sourceFile);
