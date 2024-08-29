# API Web para Gestión de Usuarios

Este proyecto implementa una API Web para interactuar con una base de datos JSON de usuarios utilizando [json-server](https://github.com/typicode/json-server). La API permite listar, agregar y eliminar usuarios en un servidor local que emula una API REST.

![Diagrama del Proyecto](https://github.com/tu_usuario/tu_repositorio/blob/main/ruta/a/tu/imagen.png)


## Funcionalidades

- **Obtener URL del Servidor**: Método para devolver la URL del servidor JSON en ejecución.
- **Listar Usuarios**: Método para imprimir en consola la lista completa de usuarios desde el servidor JSON.
- **Agregar Usuario**: Método para añadir un nuevo usuario al servidor JSON con un ID único y secuencial.
- **Eliminar Usuario**: Método para eliminar un usuario del servidor JSON basado en el ID proporcionado.

## Métodos Disponibles

### `getServerURL()`

Devuelve la URL del servidor JSON en ejecución.

**Ejemplo de uso:**
```javascript
const { getServerURL } = require('./api');
console.log(getServerURL()); // Imprime la URL del servidor
