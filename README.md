# Chotuve - Web

![Grupo](https://img.shields.io/badge/grupo-11-blue) [![Build Status](https://travis-ci.com/santiagomariani/chotuve-web-front.svg?token=JK2YBuuGjqNcqiY3N6nH&branch=master)](https://travis-ci.com/github/santiagomariani/chotuve-web-front)

![api](https://img.shields.io/badge/api-v0.1-blueviolet)
[![sv](https://img.shields.io/badge/view-app%20sv-important)](https://github.com/Franco-Giordano/chotuve-appserver)
[![sv](https://img.shields.io/badge/view-media%20sv-important)](https://github.com/sebalogue/chotuve-mediaserver)
[![sv](https://img.shields.io/badge/view-web%20front-important)](https://github.com/santiagomariani/chotuve-web-front)
[![sv](https://img.shields.io/badge/view-auth%20sv-important)](https://github.com/santiagomariani/chotuve-auth-server)
[![sv](https://img.shields.io/badge/view-android-important)](https://github.com/javier2409/Chotuve-Android)

# Estructura de carpetas

Puse 3 carpetas: components, pages y utils. En pages la idea seria hacer una carpeta por pagina (ruta, como podria ser /users, alguna seccion del dashboard) y en esa carpeta un archivo NameHerePage.js donde esta el componente principal de la pagina y tambien pueden ir en esa carpeta otros componentes que use solo esa pagina, para otros componentes que puedan compartirse entre varias paginas o componentes se ponen en components. Por ultimo, en utils se puede poner alguna logica que convenga tener separada.

No se si es lo mejor, probablemente cambie.
