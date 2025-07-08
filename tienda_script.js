function agregarAlcarrito(productId) {
  //Obtener carrto actual del localstorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//agregar ID al carrito
carrito.push(productId);

//Guardar carrito actualizado en localstorage
localStorage.setItem("carrito", JSON.stringify(carrito));
console.log(JSON.parse(localStorage.getItem("carrito")) || [])

alert("Producto agregado al carrito");
}   