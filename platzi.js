var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var velcerdo = 20;
document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo ={
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  x: 150,
  y: 150
};
var cantidadMaxVacas = aleatorio(5, 25);
var cantidadMaxPollos = aleatorio(1, 6);
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log("vacas " + cantidadMaxVacas);
    for(var v = 0; v < cantidadMaxVacas; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60
      var y = y * 60
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
      console.log("pollos " + cantidadMaxPollos);
      for(var p = 0; p < cantidadMaxPollos; p++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 50
        var y = y * 50
        papel.drawImage(pollo.imagen, x, y);
      }
  if(cerdo.cargaOK)
    {
      console.log("cerdos cargado");
      papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
      console.log(cerdo.imagen);
    }
  }
}
function moverCerdo (evento)
{
  switch(evento.keyCode)
  {
    case teclas.UP:
    cerdo.y = cerdo.y - velcerdo;
    dibujar();
    break;
  case teclas.DOWN:
    cerdo.y = cerdo.y + velcerdo;
    dibujar();
    break;
    case teclas.LEFT:
    cerdo.x = cerdo.x - velcerdo;
    dibujar();
    break;
  case teclas.RIGHT:
    cerdo.x = cerdo.x + velcerdo;
    dibujar();
    break;
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
