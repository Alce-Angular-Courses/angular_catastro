const aDatos = [ {precio : 20}, {precio: 23}, {precio: 29}]
{
    let x = 12
    x++
    // aDatos.forEach( function (elem) {elem.precio++} )
    aDatos.forEach( elem => 
        {elem.precio++
        console.log( `
            El precio es:
            ${ elem.precio} €
            `)
        } )
    console.log(aDatos)
}
