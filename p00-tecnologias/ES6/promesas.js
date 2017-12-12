function hacerAlgoPromesa (){ 
    return new Promise (function (resolve, reject) {         
        setTimeout ( () => {
            console.log ( 'hacer algo que ocupa un tiempo...'); 
            resolve()
        }, 1000); 
    }) 
} 

hacerAlgoPromesa()
.then(() => {console.log("Ultima Linea")})
.catch (() => {console.log("Error")})

