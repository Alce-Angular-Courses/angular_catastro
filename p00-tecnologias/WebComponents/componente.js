class AppSample extends HTMLElement{
    constructor() {
        super()
        console.log("Creado el componente")

        // document.querySelector('#tmp1')
        const oImport=
        document.querySelector('link[rel="import"]').import;        
        const oElem= oImport.querySelector('#tmp1')

        this.attachShadow({mode: 'open'})
        .innerHTML= oElem.innerHTML
    }
}

customElements
.define('app-sample', AppSample)
