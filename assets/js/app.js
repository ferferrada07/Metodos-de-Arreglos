
const formulario = document.querySelector('#formulario');
const input = document.querySelector('#input');
const boton = document.querySelector('#boton');
const totalTareas = document.querySelector('#Total-tareas');
const totalRealizadas = document.querySelector('#Total-realizadas');
const listatareas = document.querySelector('#listatareas');


let lista = [];

function CantidadCheckeada(){
    var checkboxes = document.getElementsByTagName("input")
    var count = 0;
    var total = 0;
    for(var i = 1; i < checkboxes.length; i++) {
        total = total + 1;
        if(checkboxes[i].type == "checkbox") {
            if(checkboxes[i].checked == true){
                count=count+1;
                totalRealizadas.innerHTML = "Realizadas  :" + count
            }
        } 
    }
    totalTareas.innerHTML= "Total Tareas: " + total
}

const render = () => {
    listatareas.innerHTML = "";
    lista.forEach((item) => {
        listatareas.innerHTML += `
                <li>
                ${item.id} - ${item.nombre} 
                <input type="checkbox" id="${item.id}" onclick="CantidadCheckeada()">
                <button onclick="eliminar(${item.id})" >❌</button>
                </li>
        `
    })
}

render ();
CantidadCheckeada();


const eliminar = (id) => {
    lista = lista.filter ((item) => item.id !== id);
    render();
    //CantidadCheckeada();
};

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    lista.push({
        id: Date.now(),
        nombre: input.value
    });

    render();
    CantidadCheckeada();
    input.value = "";
});
