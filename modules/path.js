const path = require("path");

// apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretorio atual
console.log(path.dirname(__filename));

// extesão do arquivo
console.log(path.extname(__filename));
// objeto com todas as informações do arquivo
console.log(path.parse(__filename));

// juntar caminhinhos de arquivos

console.log(path.join(__dirname, "test", "test.html"));
