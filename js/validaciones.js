/*validaciones.js
Ejercicio Validaciones.
Autora: Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>.
Licencia: GPL v3 o superior.
Año 2021
*/
'use strict'

window.onload=iniciar;

function iniciar(){
  let formulario=document.forms[0];
//  console.log(formulario);
////////VALIDACIONES DE CLASE, NO DE TAREA///////////////////
  formulario.onsubmit=validar;  //Al hacer click en enviar que entre en validar
  let comunidades = document.getElementById('comunidades');
  comunidades.onchange = provinciasExtremadura;
}
function validar(evento){
  vaciarErrores();
  let texto="";
  console.log("validamos");
  //Comprobamos la Aceptación de la Política de Privacidad
  if(!document.getElementById('iPolitica').checked){
    evento.preventDefault();
    texto="ERROR no ha aceptado la Política de Privacidad.";
    error(document.getElementById('iPolitica'),texto);
  }
  //Comprobamos el campo de nombre
  if(document.getElementById('nombre').value.length<3){
    texto="Error en la introdución del nombre.";
    error(document.getElementById('nombre'),texto);
    evento.preventDefault();
  }
////////////////////////////////////////////////////////////////////////////////////
  //Comprobar que los apellidos tienen al menos dos palabras (por JavaScript)
  let apellidos=document.getElementById('apellidos').value;
  let apellido = apellidos.split(" ").length;
  if(apellido!=2){
    texto="Error en la introdución de lo apellidos.";
    error(apellidos=document.getElementById('apellidos'),texto);
    evento.preventDefault();
  }

  //Comprobar el NIF, con la letra (por RegExp y JavaScript)
  let dni=document.getElementById('dni').value;

  let letracalcu=dniletra(dni);
  if(dni.charAt(8).toUpperCase()!=letracalcu){
    texto="Error en la introdución del DNI.";
    error(dni=document.getElementById('dni'),texto);
    evento.preventDefault();
  }

  //Texto de error de correo y teléfono nada

  //Asegurarnos que, si le gusta el brócoli, no es Asturiano.
  if(document.getElementById('si').checked){
    if(document.getElementById('comunidades').value=="Asturias"){
      texto="Error ha marcado gustarle el brócoli siendo Asturiano.";
      error(document.getElementById('si'),texto);
      evento.preventDefault();
    }
  }

}

function provinciasExtremadura(){

if(document.getElementById('comunidades').value=="Extremadura"){
  //Si es extremeño, crear un select para elegir la provincia (Cáceres y Badajoz).
    let form =document.forms[0]; //Buscamos form

    let div=document.createElement('div');  //creamos div
    form.insertBefore(div, document.getElementById("brocoli"));  //Lo añadimos a su padre haciendo que se coloque delante del label brócoli
    div.setAttribute('id','provincias');  //Le agregamos atritubo  a div

    let select = document.createElement('select');  //Creamos select
    div.appendChild(select);  //Lo añadimos a su padre div


    let label = document.createElement('label');  //Cramos label de título de provincia
    div.insertBefore(label,select);  //Lo añadimos delante del select
    let nodoTexto = document.createTextNode('Provincias: '); //Creamos el texto que queremos que almacene label
    label.appendChild(nodoTexto); //Añadimos el texto definido anteriormente al label

    let opcionvacia = document.createElement('option');  //Creamos opción vacia, por defecto
    opcionvacia.setAttribute('selected', 'selected');
    opcionvacia.setAttribute('hidden', 'hidden');
    opcionvacia.appendChild(document.createTextNode('--Seleccione una provincia--')); //Creamos el texto que queremos que almacene la opción vacia
    select.appendChild(opcionvacia); //Lo añadimos a su padre

    let opcion1 = document.createElement('option');  //Creamos opcion1
    opcion1.setAttribute('value','Caceres');  //Le agregamos atributo value
    opcion1.appendChild(document.createTextNode('Caceres')); //Creamos el texto que queremos que almacene la opcion1
    select.appendChild(opcion1); //Lo añadimos a su padre

    let opcion2 = document.createElement('option');  //Creamos opcion2
    opcion2.setAttribute('value','Badajoz');  //Le agregamos atributo value
    opcion2.appendChild(document.createTextNode('Badajoz')); //Creamos el texto que queremos que almacene la opcion2
    select.appendChild(opcion2); //Lo añadimos a su padre
  }else{

    let div = document.getElementById("provincias");  //Buscamos div
    div.remove();

  }
}

function dniletra(dni){
  let numero=dni.substring(8,1);

  let letra = "";

  //CALCULAMOS EL RESTO DE DIVIDIR EL NÚMERO ENTRE 23
  let resto = numero % 23;

  let dniLetras= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']; //array de cada letra que puede tomar

  return letra=dniLetras[resto];

}
function error(input,texto){

  input.classList.add('error');  //Le agregamos a los input un atributo definido en css

  let div = document.getElementById("divErrores");  //Buscamos div

  let p = document.createElement('p');  //Creamos p
  div.appendChild(p); //Lo añadimos a su padre
  p.classList.add('errores');  //Le agregamos p un atributo definido en css
 //Creamos el texto que queremos que almacene p---> document.createTextNode('en negrita.')
  p.appendChild(document.createTextNode(texto)); //Añadimos el texto definido anteriormente al p  SIEMPRE COMO ÚLTIMO HIJO,AL FINAL

}
function vaciarErrores(){
  let div = document.getElementById("divErrores");  //Buscamos div
  while(div.firstElementChild){   //Miestras que div tenga un primer hijo que borre a este
    div.removeChild(div.firstElementChild);
  }
}
