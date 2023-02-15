
//ejercicio 1

const catArrayEjercicio1 = [
    "😺", "😸", "😹","😺", "😸", "😹","😺", "😸", "😹", "😺"
  ]
  
  function ejercicio1(cantidadAMostrar) {
  for(let i = 0; i < cantidadAMostrar; i++) {
    console.log(catArrayEjercicio1[i])
    }
  }
  
  //ejercicio2 
  
  function ejercicio2(cantidadDeGatos, cantidadDePasos) {
    
    for(let i = 0; i < cantidadDeGatos; i++) {
      console.log( `🐈 ${"🐾".repeat(cantidadDePasos)} `)
    }
  }
  
  
  //ejercicio 3
  
  const catArrayEjercicio3 = ["🐾", "🐈", "🐾", "🐈","🐾", "🐈","🐾", "🐈","🐾", "🐈"]
  
  function ejercicio3(cantidadDeGatos, cantidadDePasos) {
    
    for(let i = 0; i < cantidadDeGatos; i++) {
      console.log(`${catArrayEjercicio3[i]} ${"🐾 ".repeat(cantidadDePasos)}` )
    }
  }




function ejercicio4() {

    // <input id="myText" />
    
    let count = 0
    var cantidad = document.getElementById("cantidad")

    var filter = document.getElementById("filter").innerHTML
    var inputValue = document.getElementById("myText").value
    
        for(let i = 0; i < filter.length; i++) {
          if(filter[i].toLowerCase().includes(inputValue)) {
        
          count = count+1
          }
        } 
    if(inputValue.length !== 0) { 
        cantidad.innerHTML = count
    }
    else {
        cantidad.innerHTML = "not value"
    }
    }

    console.log(ejercicio1())
    console.log(ejercicio2())
    console.log(ejercicio3())
    