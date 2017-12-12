class Libro {
    constructor(autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

    mostrar() {
        console.log(this)
    }
}

class LibroTecnico extends Libro {
    constructor(autor, titulo, tema) {
        super(autor, titulo)
        this.tema = tema
    }
}

const oLibro = new LibroTecnico("Pepito", "Angular Facil", "Programacion")

oLibro.editorial="Anaya";

oLibro.mostrar()