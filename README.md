# Desafío TROPIPAY

### El desafío que elegí fue el Frontend Challenge con la siguiente consigna:

<img width="745" alt="Captura de Pantalla 2022-10-19 a la(s) 11 07 27" src="https://user-images.githubusercontent.com/90215734/196714515-654373e4-8dfb-4c73-8407-24d2b5653345.png">

### Y estas especificaciones:

<img width="745" alt="Captura de Pantalla 2022-10-19 a la(s) 11 07 34" src="https://user-images.githubusercontent.com/90215734/196714613-38086aea-a47e-4010-a732-cf92746b917a.png">

El proyecto lo encaré utilizando ReactJS, creando el proyecto con Vite como herramienta y las dependencias de Axios y Materialize CSS.
A lo largo del desarrollo me encontré con algunos inconvenientes que no me permitieron cumplir con el 100% de la consigna. Sin embargo decidí igual entregar y documentar el proyecto.

Para traer la información de la API de github intenté utilizar 3 opciones:
<ul> 
<li>Octokit</li>
<li>GraphQL</li>
<li>Axios</li>
</ul>

**_Octokit_**

Octokit resultó ser en primera instancia la mejor opción. Dentro de la documentación de API Github es la herramienta más preparada y documentada. Sin embargo, tuve multiples errores de compatibilidad con mi proyecto durante la compilación que no me dejo utilizar la librería.

**_GraphQL_**

La segunda mejor opción era GraphQL, un lenguaje Query bastante user friendly para hacer este tipo de peticiones. El problema que tuve fue que no logré recorrer más de 1 subnivel de información sobre las carpetas. Además que no encontré la manera de acceder al "sha" y "blobs"  dentro del árbol, id importante para identificar las posiciones y llegar hasta los archivos para mostrarlos

**_Axios_**

Con Axios fue con la herramienta que más logré avanzar. Opté por axios antes que fetch por su simpleza en cuanto al código. Pero aún así, no resulto ser la mejor opción para este tipo de consultas como si Octokit. El código se volvió demasiado largo y complejo. En el archivo tree.md dejé el código con el que intenté lograr la consigna. Estuve cerca 🧐

## Conclusión

Elegí el challenge Front End cuando interpreté la consigna como la mejor opción para encarar, en el camino me encontré con que el diagrama de la información disponible de usuarios/repositorios/archivos en la API de Github me resultó difícil de manipular para lograr finalmente el "explorador" de carpetas y archivos. Estoy agradecido igual con la oportunidad y con haberlo intentado, con más tiempo intentaré resolverlo 😌

Guillermo Baker.

# Actualización

### Luego del meeting con Rubén, decidí personalmente usar sus observaciones para hacer algunas modificaciones en el código!

<ul>
  <li>Separar funciones del código en más componentes</li>
  <li>Ajustar algunos detalles de estilos: </li>
      <ul style="list-style-type: circle">
        <li>Corregir los margenes de título y párrafos</li>
        <li>Agregué @media queries para adaptar mejor la visualización según el dispositivo</li>
  </ul>
  <li>Ordenar y limpiar mejor el código </li>
</ul>

# RUN

Installar dependencias:
npm install

Run:
npm run dev

### Vercel Deploy:

https://tropipay-fe-challenge-gfbaker.vercel.app/
