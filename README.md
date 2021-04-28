# Data Lovers - League of Legends

## Íntroducción

* [1. Introducción](#1-introducción)
* [2. Proceso de Diseño ](#2-proceso-de-diseño)
* [3. Historias de Usuario](#3-historias-de-usuarios)
* [4. Tests con Jest](#4-tests-con-jest)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Checklist](#4-checklist)

***

## 1. Introducción


League of Legends, más conocido como LOL, es un videojuego del género multijugador de arena de batalla en línea (MOBA) y deporte electrónico lanzado el 2009, el cual fue desarrollado por Riot Games para Microsoft Windows, OS X y para consolas digitales.

Los jugadores compiten en partidas, que duran entre 15 y 50 minutos en promedio. En cada modo de juego, los equipos trabajan juntos para lograr una condición de victoria, normalmente destruyendo la estructura central en la base del equipo enemigo después de pasar por alto una línea de estructuras defensivas llamadas Torretas. En todos los modos de juego, los jugadores controlan personajes llamados «campeones», elegidos o asignados en cada partida, que tienen un conjunto de habilidades únicas, con los cuales jugarán toda la partida hasta su conclusión. 

Debido a la complejidad y el crecimiento de la comunidad de jugadores de Lol, decidimos _orientar nuestro proyecto hacia usuarios principiantes e interesados._


## 2. Proceso de Diseño

 Nuestro proyecto consiste en una página web responsive en la que se podrá visualizar los 134 campeones de Lol, filtrarlos por su Rol, ordenarlos de la a-z y viceversa, así como buscarlos por su nombre. Además, se cree conveniente mostrar el campeón con el valor mínimo y máximo de las estadísticas de mayor relevancia para nuestro público objetivo. También, se añadirá un botón para redirigir al usuario al sitio de descarga de LoL y una sección donde podrán crear su cuenta empezar a jugar.


 ### 2.1 Definición del Producto 

  #### **¿Quiénes son los principales usuarios de producto?**
  Hombres y mujeres de cualquier edad que sean principiantes o estén interesados en LoL.

  #### **¿Cuáles son los objetivos de estos usuarios en relación con el producto?**
  Usar el producto como fuente de información concisa, relevante y fácil de interpretar sobre los campeones.

  #### **¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**

  | Datos       | Importancia | 
  |  :---:      |    :----:   |     
  | Ver todos los campeones      | Tener una vista general de todos los campeones a elegir    | 
  | Ver todos los roles  | Conocer a los campeones por su rol        | 
  | Buscador de campeones por nombre     | Poder encontrar más rápido a un campeón     | 
  | Mostrar al campeón con mayor y menor stat  | Conocer al más y menos poderoso       | 

  #### **¿Cuándo utilizan o utilizarían el producto?**

  * Lo utilizarían cuando deseen empezar a jugar LoL, es decir, para que los jugadores novatos tengan una noción básica de aquello que verán en el juego(campeones, roles, información básica de cada campeón, saber el valor mínimo y máximo de los stats más relevantes con sus campeones determinados) y de lo que trata el juego.
  * Lo utilizarán para saber a que campeón escoger según sus características al momento de ingresar al juego.
  * También puede ser utilizado por jugadores experimentados cuando quieran tener información de sus campeones y elegirlos de acuerdo a su estrategia de juego.

  ### 2.2 Diseño de la Interfaz de Usuario

  #### Prototipado inicial
  Nuestro protipado inicial 

  ![LOL pantalla inicial](https://user-images.githubusercontent.com/75852321/110048967-e4707c00-7d1e-11eb-9e69-77fca37f6c73.PNG)

  ![menuChampions](https://user-images.githubusercontent.com/75852321/110048921-d15dac00-7d1e-11eb-8345-4d5b0c530c35.jpg)

  ![tablaestadística inicial](https://user-images.githubusercontent.com/55217648/109942202-f829cd00-7ca1-11eb-8375-e16594552086.png)

  ![Mobile4Estadísticas](https://user-images.githubusercontent.com/55217648/109942623-5e165480-7ca2-11eb-855d-7d9ff55139da.png)


  #### Prototipado final

  Luego de realizar nuestro prototipado inicial, realizamos algunos cambios tomando en cuenta el feedback y preguntas realizadas a 4 jugadores de Lol.
  Los cambios fueron:
  * Oscurecer más las imágenes de fondo, para tener una mejor visibilidad del contenido de la página.
  * Cambiar el filtro desplegado de Roles por un select, ya que consumía mucho espacio.
  * Cambiar el botón de "descargar juego" en la vista inicial por uno que redirija a nuestra vista de Campeones, y de esta forma no desviar al público a una página externa.
  * Agregar un video a la vista de "sobre el juego".
  * Cambiar la tabla de los 19 stats por una tabla con menores stats, ya que muchos de ellos no son muy relevantes para los principiantes en el juego.
  * Los stats más importantes para un jugador amateur/interesado son: Attackdamage, Armor y HP.
  * Agregarle un botón de cierre al modal, ya que inicialmente no lo tenía.
  * Se agregó un mensaje de Not found en la función "buscar campeón", para campeones inexistentes.

  **Enlace a prototipo en [Figma](https://www.figma.com/file/UZHx1Q3lEVio6PIGTnXYy4/LOL?node-id=0%3A1)**

  **En desktop**:

  ![Vista principal](https://user-images.githubusercontent.com/55217648/109943271-01676980-7ca3-11eb-9b80-c7bfa0488bcc.png)
  ![Vista Champions](https://user-images.githubusercontent.com/55217648/109943388-252aaf80-7ca3-11eb-8d4e-f6ef23909585.png)
  ![Vista ChampionsModal](https://user-images.githubusercontent.com/55217648/109943644-67ec8780-7ca3-11eb-8585-bb3fb190a877.png)
  ![Vista Ranking](https://user-images.githubusercontent.com/55217648/109943754-83f02900-7ca3-11eb-8cbb-d57b49c46cb3.png)
  ![Vista Acerca de](https://user-images.githubusercontent.com/55217648/109943872-a1bd8e00-7ca3-11eb-84b2-6b33de70d066.png)

  **En mobile**:

  ![Mobile1](https://user-images.githubusercontent.com/55217648/109944129-e6492980-7ca3-11eb-9c61-23a843e82a6e.png)
  ![Mobile2](https://user-images.githubusercontent.com/55217648/109944230-04168e80-7ca4-11eb-8b05-57d82f351d83.png)
  ![Mobile3](https://user-images.githubusercontent.com/55217648/109944334-21e3f380-7ca4-11eb-8fba-26b6813066a2.png)
  ![Mobile4](https://user-images.githubusercontent.com/55217648/109944580-5d7ebd80-7ca4-11eb-855e-7166781583dc.png)
  ![Mobile5](https://user-images.githubusercontent.com/55217648/109944819-9f0f6880-7ca4-11eb-9c0d-e2452277f1d6.png)
  ![Mobile6](https://user-images.githubusercontent.com/55217648/109944907-b9e1dd00-7ca4-11eb-80ad-d6c9e4a95fac.png)


  ## 3. Historias de Usuario

  Las Historias de Usuario se encuntran en el siguiente [Link](https://docs.google.com/presentation/d/1x8POmPPDDoI4t1IORePRlL9NuqoS65qn4v3oOkRCBqE/edit#slide=id.p).  


  ## 4. Tests con Jest

  Elaboramos un test con Jest, para probar las funcionalidades de filtrado, ordenado y calculo agregado ( valores mínimo y máximo).
  Obteniendo el siguiente resultado:

  ![testLOL](https://user-images.githubusercontent.com/55217648/109946164-f235eb00-7ca5-11eb-8732-415382618310.png)

  Por lo que concluimos que las funciones se ejecutan correctamente.


  ## 5. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

  ### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

  ### DOM y Web APIs

* [x] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [x] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

  ### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [x] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [x] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [x] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [x] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [x] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

  ### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

  ### Estructura del código y guía de estilo

* [x] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [x] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [x] Uso de linter (ESLINT)

  ### Git y GitHub

* [x] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

  ### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 6. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_. 