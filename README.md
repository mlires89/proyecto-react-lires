# Primera entrega del Proyecto Final

ReactJS - Comision 31150
Alumno Matias Lires

## Descripción general

La idea principal del proyecto es generar un e-commerce para una tienda dedicada a la venta de Habanos y productos relacionados con su consumo

## Componentes principales

### `NavBar`

El NavBar cuenta con los links correspondiente a cada una de las categorías de los productos y a la pagina de inicio.
Este componente se renderizará solamente cuando carga la aplicacion, manteniendose fijo durante la navegación.
Los links estan configurados para navegar a las distintas routas del proyecto.

### `ItemListContainer`

Este es un componente inteligente que en principio se mostrará en la ruta /.
Aca se obtendran los productos mediante un async-mock, que serán filtrados segun los parametros obtenidos de la ruta.(category/categoryId)
Luego se pasará el array de productos correspondiente por parámetro al componente ItemList para ser mostrados.

### `ItemDetailContainer`

Este también es un componente inteligente en el cuál se obtendran los productos mediante un async-mock, pero también recibirá un itemId por parametro,
el mismo se obtendrá de la ruta '/item/:id'
Luego pasara el parametro al componente ItemDetail, que mostrará los detalles del producto correspondiente.

### Comentarios

El proyecto esta divido en carias carpetas, en la carpeta components se encontraran agrupados los componenetes que no esten relacionados a ninguna ruta en especial.

En la carpeta pages se encontraran los componentes asociados a determinadas rutas.

