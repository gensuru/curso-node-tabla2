const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, lista, hasta) =>{

    if (lista) {
        console.log('==================================');
        console.log(`       Tabla del ${base}`.red);
        console.log('==================================');

    }
    
    try {
        
        let salida, consola = '';


        for (let i = 0; i <= hasta; i++) {

            const resultado = base * i;

            salida += `${base} x ${ i } = ${ resultado }\n`;
            consola += `${base} ${'x'.green} ${ i } ${'='.yellow} ${ resultado }\n`;
        }

        if (lista) {
            console.log(consola);
        }


        await fs.writeFileSync(`./salida/Tabla - ${ base }.txt`, salida);

        return `Tabla - ${base}`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}