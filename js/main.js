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
    document.body.style.backgroundColor = "honeydew";
    document.body.style.color = "hotpink";
})

$bottondark.addEventListener("click", function(e)
{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "pink";
})
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
//leer json asyn function