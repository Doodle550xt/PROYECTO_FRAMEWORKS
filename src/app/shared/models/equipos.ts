import { Entrenador } from "./entrenador";
import { Liga } from "./ligas";

export interface Equipo {
    id: number;
    nombre: string;
    ciudad: string;
    entrenador: Entrenador;
    liga?:Liga
}
export interface EquipoPayload {
    nombre: string;
    ciudad: string;
    entrenador: {
        id: Number
    },
    liga?: {
        id: Number
    }
}