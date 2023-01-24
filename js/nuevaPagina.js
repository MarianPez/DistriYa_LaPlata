let nuevaPagina = document.getElementById("nuevaPagina")

const obtenerProducto = () => {
    let productoStorage = localStorage.getItem("producto")
    let producto = JSON.parse(productoStorage)

    const div = document.createElement("div")
    div.classList.add("col-12")
    div.innerHTML = `<img src="${producto.imagen}" alt=""> 
    <h3> ${producto.nombre}</h3>
    <p> ${producto.descripcion}</p>
    <button id="cambiar_pagina${producto.id}" class="boton_info">Info</button>`

   nuevaPagina.appendChild(div)

}

obtenerProducto()





