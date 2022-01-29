# 🌎Countries App

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## 📝Descripción:

<p>En este proyecto se desarrolló una SPA (Single Page Application), en la cual se puede ver información de distintos paises utilizando la API externa [restcountries](https://restcountries.com/). La misma tiene funcionalidades tales como buscar, filtrar/ordenar países, paginado para poder ver 10 paises por página y formulario para crear actividades turísticas en uno o todos los países que se deseen.

Para las funcionalidades de filtrado y ordenamiento NO se usaron los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que fueron hechos desde cero.
</p>

#### Funcionalidades

__Pagina inicial__- Landing page con:
- [ ] Imagen de fondo representativa del proyecto.
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__- Contiene:
- [ ] Input de búsqueda para encontrar países por nombre.
- [ ] Área donde se verá el listado de países con su bandera, nombre y continente.
- [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística.
- [ ] Botones/Opciones para ordenar tanto ascendente como descendentemente los países por orden alfabético y por cantidad de población.
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina.

__Ruta de detalle de país__- Contiene:
- [ ] Los campos mostrados en la ruta principal para cada país (bandera, nombre y continente)
- [ ] Código de país de 3 letras (id.
- [ ] Capital.
- [ ] Subregión.
- [ ] Área.
- [ ] Población.
- [ ] Actividades turísticas con toda su información asociada.

__Ruta de creación de actividad turística__- Contiene:
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultáneo.
- [ ] Botón/Opción para crear una nueva actividad turística.

> El formulario de creación está validado con JavaScript.


## 🚀Para poder iniciar el proyecto en su navegador:

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__🚨IMPORTANTE:🚨__ Es necesario contar mínimamente con la última versión estable de Node y NPM. Asegurese de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.


Actualmente (Enero 2022) las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v


#### Tecnologías usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres



