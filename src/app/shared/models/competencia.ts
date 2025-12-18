import { Equipo } from './equipos';

export interface Competencia {
    id: number;
    equipoLocal: Equipo;
    equipoVisitante: Equipo;
    fecha: string; 
    golesLocal?: number;
    golesVisitante?: number;
}
export interface CompetenciaPayload {
    equipoLocal: {
        id: number;
    };
    equipoVisitante: {
        id: number;
    };
    fecha: string;
    golesLocal?: number;
    golesVisitante?: number;
}