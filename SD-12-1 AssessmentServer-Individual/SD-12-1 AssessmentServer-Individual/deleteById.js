const fs = require('fs');
const path = './db.json'; // Ruta al archivo JSON
const idToDelete = process.argv[2]; // El ID que se pasa como argumento

// Leer el archivo JSON
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    process.exit(1);
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error al parsear el archivo JSON:', parseErr);
    process.exit(1);
  }

  // Filtrar los objetos que no tienen el ID especificado
  const updatedData = jsonData.filter(item => item.id !== idToDelete);

  // Guardar el archivo JSON actualizado
  fs.writeFile(path, JSON.stringify(updatedData, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
      process.exit(1);
    }
    console.log(`Objeto con ID ${idToDelete} eliminado.`);
  });
});
