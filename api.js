//api= INTERFAZ PROGRAMACION DE APLICACIONES... Es una interfaz que conecta dos sistemas, por mas que esten en 2 lenguajes diferentes, se le puede dar tareas a ese nuevo proyecto web desde mi proyecto web
//es decir es dar tareas o acciones desde mi proyecto a otro//Ejemplo: 

//metodo get = Obteniendo datos de mi sistema externo
fetch('url')
.then(()=>{
    return respuesta.json();

})
.then((json)=>{
    window.console.log('json');

})
.catch((error)=>{
    window.console.log(error);

});

//Metodo Post = enviando datos a mi sistema externo

fetch('url,')
.then(()=>{
    return respuesta.json();

})
.then((json)=>{
    window.console.log('json');

})
.catch((error)=>{
    window.console.log(error);

});