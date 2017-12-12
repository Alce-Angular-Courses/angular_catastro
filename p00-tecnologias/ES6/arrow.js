let oPrueba = { 
    precio: 12, 
    iva : 1.16, 
    };  

oPrueba.calculaIvaAsync = function () { 
    setTimeout ( () => { 
        let precioFinal = this.precio * this.iva 
        console.log(` 
        Usando una funcion clásica:  
        El precio final es ${precioFinal} 
        `); 
    }, 1000)
    return precioFinal 
} 

x = oPrueba.calculaIvaAsync()
console.log("Linea Final" + x) 