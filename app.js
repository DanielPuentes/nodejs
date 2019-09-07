const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
// console.log(module);
// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// console.log(parametro);
// let base = parametro.split('=')[1];

console.log(argv);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
// console.log(argv);
// console.log(base);

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(base, limite)
        break;
    case 'crear':
        console.log(`crear`);
        crearArchivo(base, limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('no se reconoce el comando');
}


