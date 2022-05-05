# Primera entrega del Proyecto Final

ReactJS - Comision 31150
Alumno Matias Lires

## Descripción general

La idea principal del proyecto es generar un e-commerce para una tienda dedicada a la venta de Habanos y productos relacionados con su consumo

## Componentes principales

### `NavBar`

El NavBar cuenta con los links correspondiente a cada una de las categorías de los productos y a la página de inicio.
Este componente se renderizará solamente cuando carga la aplicación, manteniendose fijo durante la navegación.

Los links están configurados para navegar a las distintas rutas del proyecto.

### `ItemListContainer`

Este es un componente inteligente que en principio se mostrará en la ruta '/'.
Acá se obtendran los productos mediante un async-mock, que serán filtrados según los parametros obtenidos de la ruta.(category/categoryId).

Luego se pasará el array de productos filtrado por parámetro al componente ItemList para ser mostrados.

### `ItemDetailContainer`

Este también es un componente inteligente en el cuál se obtendrán los productos mediante un async-mock, pero también recibirá un itemId por parámetro, el mismo se obtendrá de la ruta '/item/:id'.

Luego pasará el parametro al componente ItemDetail, que mostrará los detalles del producto correspondiente.

### Comentarios

El proyecto está divido en varias carpetas, en la carpeta components se encontrarán agrupados los componenetes que no estén relacionados a ninguna ruta en especial.

En la carpeta pages se encontraran los componentes asociados a determinadas rutas.

