export interface PrintersModel {
    id: number | string ;
    nombre: string;
}

export interface DepartamentosModel {
    id: number | string;
    nombre: string;
}

export class Printer implements PrintersModel {
    id: number | string;
    nombre: string;

    constructor (id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

// En TS suele usarse una version mas reducida de lo anterior
export class Departamento implements DepartamentosModel {
    constructor (
        public id: number | string,
        public nombre: string
    ) {}
}
