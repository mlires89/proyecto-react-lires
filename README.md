# Entrega del Proyecto Final

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

### `Cart`

En este componente se muestran los productos agregados al carrito de compras, es el paso previo al checkout.

Si el carrito NO esta vacio nos dará la opcion de diriginrnos mediante un Link a la page checkout


### `Checkout`

En este componente se solicitan los datos al usuario para generar un registro con ellos mas los productos que se encuentran en el carrito para finalizar la compra.

Se sube la orden de compra a firebase, mostrandose un componente Spinner mientras se realiza la carga.

Una vez finalizado devuelve el id del registro en caso de completarse la tarea exitosamente.


### Comentarios

El proyecto está divido en varias carpetas, en la carpeta components se encontrarán agrupados los componenetes que no estén relacionados a ninguna ruta en especial.

En la carpeta pages se encontraran los componentes asociados a determinadas rutas.

