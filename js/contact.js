class Productos{
constructor(id, nombre, descripcion, precio, cantidad, imagen){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
    this.boton = false;
}


}





let catalogo_productos = [];
catalogo_productos.push(new Productos("1", "Helado", "comestible", 1500, 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyMkInkLgnpsyGdm2kc4YiF3C24_Vw1FblEHqxn7nEr6Bme3Wxpr5kElobGvyGDBAOrc&usqp=CAU"),new Productos ( "2","pis","bebible",1200, 20, "https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg"))
let clase_contiene = document.getElementById("clase-contiene")


catalogo_productos.forEach((el) => {
    const div = document.createElement("div")
    div.classList.add("col-12")
    div.innerHTML = `<img src="${el.imagen}" alt=""> 
    <h3> ${el.nombre}</h3>
    <p> ${el.descripcion}</p>
    <button id="cambiar_pagina${el.id}" class="boton_info">Info</button>`

    clase_contiene.appendChild(div)


    const boton = document.getElementById(`cambiar_pagina${el.id}`)

    boton.addEventListener("click",() => {
        pasarPagina(el.id)
    })
})

const pasarPagina = (id) => {
    const item = catalogo_productos.find(el => el.id === id)
    let producto = {
        id: item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,
        precio: item.precio,
        cantidad: item.cantidad,
        imagen: item.imagen
    }
    let productoStorage = JSON.stringify(producto)
    localStorage.setItem("producto", productoStorage)
    document.location.href="../pages/nuevapagina.html"
}


