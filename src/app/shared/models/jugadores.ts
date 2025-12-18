import { Entrenador } from "./entrenador";
import { Equipo } from "./equipos";

export interface Jugador {
    id: number;
    nombre: string;
    numero: Number;
    posicion: String;
    equipo: Equipo
}
export interface JugadorPayload {
    nombre: string;
    numero: Number;
    posicion: string;
    equipo: {
        id: Number
    }
}