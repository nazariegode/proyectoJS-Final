// get
let titulo1=document.querySelector('#item1-titulo');
let precio1=document.querySelector('#item1-precio');

let titulo2=document.querySelector('#item2-titulo');
let precio2=document.querySelector('#item2-precio');

let titulo3=document.querySelector('#item3-titulo');
let precio3=document.querySelector('#item3-precio');

let titulo4=document.querySelector('#item4-titulo');
let precio4=document.querySelector('#item4-precio');

let titulo5=document.querySelector('#item5-titulo');
let precio5=document.querySelector('#item5-precio');

let titulo6=document.querySelector('#item6-titulo');
let precio6=document.querySelector('#item6-precio');

let titulo7=document.querySelector('#item7-titulo');
let precio7=document.querySelector('#item7-precio');

let titulo8=document.querySelector('#item8-titulo');
let precio8=document.querySelector('#item8-precio');

// fetch 

function obtenerDatos(){
    const APISUSHI = 'https://6456cb9b5f9a4f23614c29f6.mockapi.io/api/proyecto/sushi'
    fetch(APISUSHI)
        .then((datas) => datas.json())
        .then((data) => {
            titulo1.textContent = `${data[0].titulo}`
            precio1.textContent = `${data[0].precio}`

            titulo2.textContent = `${data[1].titulo}`
            precio2.textContent = `${data[1].precio}`

            titulo3.textContent = `${data[2].titulo}`
            precio3.textContent = `${data[2].precio}`

            titulo4.textContent = `${data[3].titulo}`
            precio4.textContent = `${data[3].precio}`

            titulo5.textContent = `${data[4].titulo}`
            precio5.textContent = `${data[4].precio}`

            titulo6.textContent = `${data[5].titulo}`
            precio6.textContent = `${data[5].precio}`

            titulo7.textContent = `${data[6].titulo}`
            precio7.textContent = `${data[6].precio}`

            titulo8.textContent = `${data[7].titulo}`
            precio8.textContent = `${data[7].precio}`

})
}

obtenerDatos(); 
