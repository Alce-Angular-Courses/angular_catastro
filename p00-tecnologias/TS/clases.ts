interface Edicion {
    editorial: string;
    fecha: number;
}

class Libro implements Edicion {
    public id: number | string; 
    public editorial;
    public fecha;
    public autor: string;
    public titulo: string;
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }
}

class LibroTecnico extends Libro {
    public tema: string;
    constructor(autor, titulo, tema) {
        super(autor, titulo);
        this.tema = tema;
    }

    mostrar() {
        console.log(this);
    }
}

const oLibro = new LibroTecnico("Pepito", "Angular Facil", "Programacion")

let oLibro2: Libro = 
    {id: '', 
    editorial: '',
    fecha: 0,
    autor: '',
    titulo: ''}

oLibro.mostrar()