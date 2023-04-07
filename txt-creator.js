const fs = require("fs");

const filenames = [
  "ffight",
  "ffighta",
  "ffightu",
  "ffightub",
  "ffightj",
  "ffightjh",
  "ffightjbl",
  "ffightjbl1",
  "ffightjb",
  "ffightjba",
  "ffightjb1",
  "ffightb",
  "ffightbl",
  "ffightbl1",
  "ffightt",
  "ffightt2",
  "ffightt1",
  "ffighttj",
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
      }
    });
  });
};

crearArchivosTXT();
