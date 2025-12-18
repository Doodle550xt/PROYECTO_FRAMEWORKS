import { Equipo } from "./equipos";

export interface Liga {
    id: number;
    nombre: string;
    pais: string;
    temporadaActual: string;
    equipos: Equipo[]
}

export interface LigaPayload {
    nombre: string;
    pais: string;
    temporadaActual: string;
}