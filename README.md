# FALENA



### Integrantes

------------
- Daiana Abal edad 33, corista/coreuta.
- Santiago Uria edad 19, técnico informático.
- Sebastian Abila edad 31, hobby huerta Organica

### Tematica del sitio y audiencia

------------


Falena es una tienda especializada en libros digitales en español, donde podras encontrar las ultimas novedades literarias seleccionadas por nuestro equipo de lectores.
Falena no solo es una tienda sino tambien una editorial online que brinda apoyo a todos aquellos escritores independientes que buscan un espacio de difusion.
La tienda online Falena invita a descubrir sus colecciones de renombrados autores y escritores independientes a los fanaticos de la lectura y a quienes quieran leer su primer libro.

### Listado de paginas referentes

------------


- [tematika](https://www.tematika.com "tematika")
- [amazon](https://www.amazon.es/ebooks-kindle/b?ie=UTF8&node=827231031 "amazon")
- [bananalibros](https://www.bananalibros.com.ar/ "bananalibros")
- [libreriaboris](https://www.libreriaboris.com.ar/ "libreriaboris")

Lo que nos inspiro de los sitios de referencia fue el Front-end, en donde de cada pagina sacamos una caracteristicas en particular como navegacion y la forma de organizar el contenido.
 
### Wireframe

------------

- [Home](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/Home.png "Home")
- [Detalle de producto](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/Detalle_producto.png "Detalle de producto")
- [Carrito de compras](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/carrito.png "Carrito de compras")
- [Formulario de registro](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/register.png "Formulario de registro")
- [Login](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/login.png "Login")
- [Formulario de carga de producto](https://github.com/sebastianabila/grupo_10_falena/blob/master/wireframe/formulario_de_carga_producto.png "Formulario de carga de producto")



# Sprint 2:

------------
### Tablero de trabajo
Para la realización y organización del proyecto optamos por realizar un tablero en Trello, el link del mismo es el siguiente: [Tablero de Trello](https://trello.com/b/JpDPQ3ev/grupo-10-librería-falena "Tablero de Trello")

### Retro.md
Retrospectiva: [Retro.md](https://github.com/sebastianabila/grupo_10_falena/blob/master/retro.md "retro.md")

### View
- Home: index.ejs
- Detalle del producto: productDetail.ejs
- Carrito de compras: productCart.ejs
- Formulario de registro: register.ejs
- Formulario de carga de producto: productAdd.ejs

# Sprint 3:

### Retro.md
Retrospectiva: [Retro.md](https://github.com/sebastianabila/grupo_10_falena/blob/master/retro.md "retro.md")

### Tablero de trabajo
Para la realización y organización del proyecto optamos por realizar un tablero en Trello, el link del mismo es el siguiente: [Tablero de Trello](https://trello.com/b/JpDPQ3ev/grupo-10-librería-falena "Tablero de Trello")

### Archivos
- Creamos Json de [Productos](https://github.com/sebastianabila/grupo_10_falena/blob/master/falena/data/product.json "Productos") [Usuarios](https://github.com/sebastianabila/grupo_10_falena/blob/master/falena/data/user.json "Usuarios") [Categoria](https://github.com/sebastianabila/grupo_10_falena/blob/master/falena/data/category.json "Categoria")

### vistas creadas del CRUD
- /products (GET), Listado de productos
- /products/create (GET), Formulario de creación de productos
- /products/ :id (GET), Detalle de un producto particular
- /products (POST), Acción de creación (a donde se envía el formulario)
- /products/ :id /edit (GET), Formulario de edición de productos
- /products/ :id (PUT), Acción de edición (a donde se envía el formulario)
- /products/ :id (DELETE) Acción de borrado

# Sprint 4:

### Retro.md
Retrospectiva: [Retro.md](https://github.com/sebastianabila/grupo_10_falena/blob/master/retro.md "retro.md")

### Tablero de trabajo
Para la realización y organización del proyecto optamos por realizar un tablero en Trello, el link del mismo es el siguiente: [Tablero de Trello](https://trello.com/b/JpDPQ3ev/grupo-10-librería-falena "Tablero de Trello")

### Formulario de registro con:
- Los campos mínimos mencionados en el sprint anterior
- Subida de una imagen de perfil
- Guardado en JSON con encriptación de contraseña
### Formulario de login con:
- Campos de email y password
### Rutas de huéspedes y usuarios
- Las de huéspedes deberán redireccionar al perfil si el usuario está logeado
- Las de usuarios deberán redireccionar al login si el usuario no está logeado
### Usuarios Administrador
- Email: admin@admin.com
- password: 123456
### Usuarios visitante
- Email: vistante@vistante.com
- password: 123456
