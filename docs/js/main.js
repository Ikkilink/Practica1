console.log("uwu");
//modificar css
let $linkGithub = document.querySelector("#link"); //puede almacenar una variable del css 
$linkGithub.href ="https://overwatch.fandom.com/wiki/D.Va";
$linkGithub.target = "_blank";

//modificar html
let nombre = "uwu"
let $nombre = document.querySelector("#nombre");
$nombre.innerHTML = nombre;
//eventos

let $bottonlight =document.querySelector("#button-light")
let $bottondark =document.querySelector("#button-dark")

$bottonlight.addEventListener("click", function(e)
{
    document.body.style.backgroundColor = "aliceblue";
    document.body.style.color = "hotpink";
})

$bottondark.addEventListener("click", function(e)
{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "pink";
})

//leer json asyn function

async function obtenerDatos() {
    let respuesta = await fetch("./docs/js/data.json");
    let datos = await respuesta.json();
    let $info = document.querySelector("#info");

  $info.innerHTML = `
    <table border="1">
      <tr>
        <td>Nombre</td>
        <td>${datos.nombre}</td>
      </tr>
      <tr>
      <td>Apodo</td>
      <td>${datos.apodo}</td>
    </tr>
      <tr>
        <td>Edad</td>
        <td>${datos.edad}</td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>${datos.activa}</td>
      </tr>
      <tr>
        <td>Estadisticas</td>
        <td>${datos.stats}</td>
      </tr>
      <tr>
        <td>Asociacion </td>
        <td>${datos.asociacion.meka}</td>
      </tr>
      <tr>
        <td>Asociación Actual</td>
        <td>${datos.asociacion.ow}</td>
      </tr>
    </table>
  `;

  console.log(datos);
}

obtenerDatos();
