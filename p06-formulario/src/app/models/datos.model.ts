import { PrintersModel, DepartamentosModel } from './maestros.model';

export interface DatosModel {
    nombre: string;
    apellidos: string;
    telefono: string;
    impresora: PrintersModel;
    isColor: boolean;
    isClaro: boolean;
    departamento: DepartamentosModel;
}
