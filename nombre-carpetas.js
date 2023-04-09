/* const fs = require('fs');

const directorio = 'E:\Juegos\Mame\[Roms]';

fs.readdir(directorio, (error, archivos) => {
  if (error) {
    console.error('Error al leer el directorio:', error);
    return;
  }

  const carpetas = archivos.filter((archivo) => {
    const ruta = `${directorio}/${archivo}`;
    return fs.statSync(ruta).isDirectory();
  });

  console.log('Las carpetas en el directorio son:', carpetas);
}); */

/*const fs = require('fs');

const directorio = '../../../Juegos/Mame/[Roms]';
const dirJuegos = 'E:/Juegos/Mame/[Roms]'

try {
  const nombres = fs.readdirSync(directorio);
  const carpetas = nombres.filter(nombre => {
    const ruta = `${directorio}/${nombre}`;
    return fs.statSync(ruta).isDirectory() && !nombre.startsWith('System Volume Information');
  });
  console.log(carpetas);
} catch (error) {
  console.error(error);
}*/

const fs = require('fs');
const path = require('path');

const directorio = '../../../Juegos/Mame/[Roms]';
const dirJuegos = 'E:/Juegos/Mame/[Roms]'

try {
  const nombres = fs.readdirSync(directorio);
  const carpetas = nombres.filter(nombre => {
    const ruta = path.join(directorio, nombre);
    return fs.statSync(ruta).isDirectory() && !nombre.startsWith('System Volume Information');
  }).map(carpeta => path.join(dirJuegos, carpeta));
  console.log(carpetas);
} catch (error) {
  console.error(error);
}
