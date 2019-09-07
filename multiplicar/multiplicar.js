const fs = require('fs');

let base = 5;

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`Base ${base} * ${i} = ${base * i} `);        
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`${base} No es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `Base ${base} * ${i} =  ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al ${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}