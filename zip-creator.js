/*
Paso 1: "E:\Juegos\Mame\[Dat]\MAME_Dats_252\DOCs\MAME 0.252 ListFull.txt" extraemos los nombres de las versiones actualizadas
Paso 2: pedimos a chatGPT que genere la lista con comillas y comas al final
Paso 3: colocamos la lista en el array "filenames"
Paso 4: Ejecutar en la consola "node zip-creator.js"
Paso 5: capiamos los archivos creados a la carpeta donde queremos tener las roms
*/

const fs = require("fs");
const JSZip = require("jszip");

// colocar los nombres de archivo aquí //
const filenames = [
"ffight",
"ffight2b",
"ffight3b",
"ffighta",
"ffightae",
"ffightbl",
"ffightbla",
"ffightblb",
"ffightj",
"ffightj1",
"ffightj2",
"ffightj3",
"ffightj4",
"ffightjh",
"ffightu",
"ffightu1",
"ffightua",
"ffightub",
"ffightuc",
];

const crearArchivosTXT = () => {
  const total = filenames.length;
  let count = 0;
  filenames.forEach((filename) => {
    const contenido = "Contenido del archivo " + filename;
    fs.writeFile(filename + ".txt", contenido, (error) => {
      if (error) throw error;
      count++;
      console.log(`Archivo ${filename}.txt creado.`);
      if (count === total) {
        console.log("Todos los archivos creados.");
        crearArchivosZIP();
      }
    });
  });
};

const crearArchivosZIP = () => {
  const total = filenames.length;
  let count = 0;
  filenames.forEach((filename) => {
    const zip = new JSZip();
    const contenido = fs.readFileSync(filename + ".txt");
    zip.file(filename + ".txt", contenido);
    zip.generateAsync({ type: "nodebuffer" }).then((buffer) => {
      fs.writeFileSync(filename + ".zip", buffer);
      count++;
      console.log(`Archivo ${filename}.zip creado.`);
      if (count === total) {
        console.log("Todos los archivos ZIP creados.");
      }
    });
  });
};

crearArchivosTXT();

