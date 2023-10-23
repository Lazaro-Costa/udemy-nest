const yargs = require('yargs');

const argv = yargs
  .option('file', {
    alias: 'f',
    describe: 'Nome do arquivo para a nova migração',
    demandOption: true,
    string: true,
  })
  .help()
  .alias('help', 'h').argv;

const argumento = argv.file;
const comando = `npx typeorm migration:create src/migrations/${argumento}`;

const { exec } = require('child_process');
exec(comando, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar o comando: ${error}`);
    return;
  }
  console.log(`Saída do comando: ${stdout}`);
});
