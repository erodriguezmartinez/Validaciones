/**
 *    EjersValidaciones.js
 *   @author Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'
/*EJERS: 1-12, 15, 13(sin completar)*/

//console.log('Cargado JS')

window.onload=iniciar;

function iniciar(){
    document.getElementById('iTP').onblur=comprobar;
    document.getElementById('iMatriculam').onblur=comprobar;
    document.getElementById('iMatriculaa').onblur=comprobar;
    document.getElementById('iDNI').onblur=comprobar;
    document.getElementById('iFecha').onblur=comprobar;
    document.getElementById('iCodigo').onblur=comprobar;
    document.getElementById('iCorreo').onblur=comprobar;
    document.getElementById('iTelefonon').onblur=comprobar;
    document.getElementById('iTelefono').onblur=comprobar;
    document.getElementById('iTelefonoi').onblur=comprobar;
    document.getElementById('iNume').onblur=comprobar;
    document.getElementById('iNumr').onblur=comprobar;
    document.getElementById('iURL').onblur=comprobar;
    document.getElementById('iBanco').onblur=comprobar;
}
function comprobar(){
    console.log("Comprobar...");

    /*------COMPROBAR IP-------*/
    let exp1= new RegExp(/^(\d{1,3}\.){3}\d{1,3}$/);
    //if(!document.getElementById('iTP').ariaValueMax.match(exp1)){
    if(!exp1.test(document.getElementById('iTP').value)){
        console.log('IP erronea');
    }else{
        console.log('IP correcta'); 
    }

    /*------Matrícula moderna-------*/ //1234ABC
    let exp2= new RegExp(/^\d{4}[A-Z]{3}$/);
    //if(!document.getElementById('iMatriculam').ariaValueMax.match(exp2)){
    if(!exp2.test(document.getElementById('iMatriculam').value)){
        console.log('Matrícula moderna erronea');
    }else{
        console.log('Matrícula moderna correcta'); 
    }

    /*------Matrícula antigua-------*/ //(M12345, BA5575C o BA1234AB)
    let exp3= new RegExp(/^[A-Z]{1}\d{5}$/);
    let exp4= new RegExp(/^[A-Z]{2}\d{4}[A-Z]{1}$/);
    let exp5= new RegExp(/^[A-Z]{2}\d{4}[A-Z]{2}$/);
    //if(!document.getElementById('iMatriculaa').ariaValueMax.match(exp2)){
    if(!exp3.test(document.getElementById('iMatriculaa').value) 
    && !exp4.test(document.getElementById('iMatriculaa').value) 
    && !exp5.test(document.getElementById('iMatriculaa').value) ){
        console.log('Matrícula antigua erronea');
    }else{
        console.log('Matrícula antigua correcta'); 
    }
   
    /*------DNI-------*/ //08331338G
    let exp6= new RegExp(/^\d{8}[A-Z]{1}$/);
    let dni=document.getElementById('iDNI').value;
    //if(!document.getElementById('iDNI').ariaValueMax.match(exp6)){
    if(!exp6.test(dni)){
        console.log('DNI erroneo');
    }else{
        let letracalcu=dniletra(dni);
        if(dni.charAt(8).toUpperCase()!=letracalcu){
            console.log('Error en la introdución del DNI'); 
        }else{
            console.log('DNI correcto'); 
        }
    }

    /*------FECHA CON FORMATO DD/MM/AAAA-------*/ // 07/08/2025
    //FALTARIA VALIDAR MES DE FEBRERO
    //FALTA VALIDAR DÍAS 3.. DE CADA MES
    //dd/mm/yyyy o dd-mm-yyyy:  /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})(\s)([0-1][1-9]|[2][0-3])(:)([0-5][0-9])$/
    //dd/mm/yyyy hh:mm o dd-mm-yyyy hh:mm = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/
    //dd/mm/yyyy hh:mm:ss o dd-mm-yyyy hh:mm:ss = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/
    let exp7= new RegExp(/^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/); 
    //if(!document.getElementById('iFecha').ariaValueMax.match(exp7)){
    if(!exp7.test(document.getElementById('iFecha').value)){
        console.log('Fecha erronea');
    }else{
        console.log('Fecha correcta'); 
    }


    /*------CÓDIGO POSTAL-------*/  //06100 //ENTRE 01000 y 52999.
    // /^[0-4]{1}\d{4}$/
    let exp8= new RegExp(/^(?:[0-4][0-9]|5[0-2])[0-9]{3}$/);
    //if(!document.getElementById('iCodigo').ariaValueMax.match(exp8)){
    if(!exp8.test(document.getElementById('iCodigo').value)){
        console.log('Código postal erroneo');
    }else{
        console.log('Código postal correcto'); 
    }

    /*------CORREO-------*/  //esperanza@gmail.com o  oo-bar.baz@example.com
    //Una implementación del Estandard Official: RFC 5322:( valida en el 99.99% de los emails existentes )
    let exp9= new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    //if(!document.getElementById('iCorreo').ariaValueMax.match(exp9)){
    if(!exp9.test(document.getElementById('iCorreo').value)){
        console.log('Correo erroneo');
    }else{
        console.log('Correo correcto'); 
    }

    /*------NÚMERO DE TELÉFONO NACIONAL (SIN ESPACIOS)-------*/  //+345657459821 
    let exp10= new RegExp(/^\+34\d{9}$/);
    //if(!document.getElementById('iTelefonon').ariaValueMax.match(exp10)){
    if(!exp10.test(document.getElementById('iTelefonon').value)){
        console.log('Teléfono nacional erroneo');
    }else{
        console.log('Teléfono nacional correcto'); 
    }

    
    /*------NÚMERO DE TELÉFONO MOVIL-------*/  //657459821
    let exp11= new RegExp(/^\d{9}$/);
    //if(!document.getElementById('iTelefono').ariaValueMax.match(exp11)){
    if(!exp11.test(document.getElementById('iTelefono').value)){
        console.log('Teléfono erroneo');
    }else{
        console.log('Teléfono correcto'); 
    }

    /*------NÚMERO DE TELÉFONO INTERNACIONAL (SIN ESPACIOS)-------*/  //+345657459821 , +271234567
    let exp12= new RegExp(/^\+[1-9]{1}[0-9]{3,14}$/);
    //if(!document.getElementById('iTelefonoi').ariaValueMax.match(exp12)){
    if(!exp12.test(document.getElementById('iTelefonoi').value)){
        console.log('Teléfono internacional erroneo');
    }else{
        console.log('Teléfono internacional correcto'); 
    }

    /*------NÚMERO ENTERO-------*/  //22222, 000, 1, -1, -23, -1213
    let exp13= new RegExp(/^-?[0-9]\d*(\d+)?$/);
    //if(!document.getElementById('iNume').ariaValueMax.match(exp13)){
    if(!exp13.test(document.getElementById('iNume').value)){
        console.log('Número entero erroneo');
    }else{
        console.log('Número entero correcto'); 
    }

    /*------NÚMERO REAL-------*/  //22222, 000, 1, -1, -23, -1213, 22.2, -4.323
    let exp14= new RegExp(/^-?[0-9]\d*(\.\d+)?$/);
    //if(!document.getElementById('iNumr').ariaValueMax.match(exp14)){
    if(!exp14.test(document.getElementById('iNumr').value)){
        console.log('Número real erroneo');
    }else{
        console.log('Número real correcto'); 
    }

    /*------VALIDAR URL-------*/  // https://www.google.es, https://httpd.apache.org/
    let exp15= new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    //if(!document.getElementById('iURL').ariaValueMax.match(exp15)){
    if(!exp15.test(document.getElementById('iURL').value)){
        console.log('URL erronea');
    }else{
        console.log('URL correcta'); 
    }

    //FALTA COMPLETAR
    /*------VALIDAR CUENTA BANCARIA-------*/  // ES2114650100722030876293
    //CP	DC	Entidad	Oficina	DC	Número de cuenta
    //ES	21	1464	0100	72	2030876293
    let exp16= new RegExp(/^[a-zA-Z]{2}\d{22}$/);
    //if(!document.getElementById('iBanco').ariaValueMax.match(exp16)){
    if(!exp16.test(document.getElementById('iBanco').value)){
        console.log('Número de cuenta bancaria erronea');
    }else{
        console.log('Número de cuenta bancaria  correcta'); 
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

  //https://regex101.com/

  //https://programacion.net/articulo/25_expresiones_regulares_que_todo_programador_web_deberia_conocer_1213
  //https://desarrollowp.com/blog/tutoriales/resolucion-de-los-ejercicios-del-taller-de-expresiones-regulares-en-wordcamp-sevilla/
