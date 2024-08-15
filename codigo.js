


//function func_form(e){
  //window.alert('ejecute esta funcion');
  console.log(e);
  e.preveventDefault();
let etiqueta_input_nombre = window.document.getElementById('labelNombre');
let etiqueta_input_edad = window.document.getElementById('labelEdad'); 

let valorinput1 = etiqueta_input_nombre.value;
let valorinput2 = etiqueta_input_edad.value;

if(valorinput2>18){
window.alert('usted no puede enviar el formulario porque es menor de edad')
}

//}
function p1(){
  window.console.log('calentar el horno ');
}
function paso2(p1){
  window.console.log('tomar un recipiente, colocar huevo +azucar y mezclar hasta que esto se encuentre en espumoso');
}

function p3(p2){
  window.console.log('colocar harina en el recipiente hasta que quede una mezcla o masa para hornear');
}

function p4(p3){
  window.console.log('engrasar o colocar harina en un molde o bandeja ');
}

function p5(p4){
  window.console.log('volcar la mezcla en el molde')
}

function p6(p5){
  window.console.log('colocar la bandeja en el horno')

}

class promise {

  constructor(funcion){
        resuelto
        rechazado
        funcion(resuelto, rechazado);
  }
}
function funcionpromesa (){
  let x = 3
  if(x===3){
    resuelto('se ejecuto correctamente');
  }
  else{
    rechazado('se ejecuto incorrectamente');
  }
}

let promesa = new Promise(funcionpromesa);

promesa.then(()==>{
    //window.console.log('se ejecuto correctamente la promesa')

});
promesa.catch(()==>{
    //window.console.log('no se ejecuto correctamente la promesa')
});
//then significa entonces, y catch significa sino
