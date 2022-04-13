console.log('prueba de funcionamiento')

const inputVal = document.getElementById('input-text')
const botAgregar = document.querySelector('#agregar')

console.log(inputVal)
console.log(botAgregar)

let arr= [];

botAgregar.addEventListener('click',() => {
    arr.push(inputVal.value)
    inputVal.value = ''
    console.log(arr)
    localStorage.setItem('pendientes', arr)
    renderizaElem()
})


function renderizaElem(){
    const lista= document.getElementById('lista-pendientes')
    lista.innerHTML = ''
    arr.forEach(function (item,i){
        lista.innerHTML += `
        <li>
        ${item}
        <button class="buton3" onclick="borrarElemento(${i})">Hecho</button>
        </li>
        `
    })
}

function borrarElemento (posicion){
    console.log(posicion)
    arr.splice(posicion, 1)
    localStorage.setItem('pendientes', arr)
    renderizaElem()
}

function getItems(){
    const pendientes = localStorage.getItem ('pendientes')
    'tarea1,tarea2,tarea3'
    arr = pendientes.split(',')
    renderizaElem()
}

getItems()
