export interface Agencia {
  id: number;
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
  imageUrl: string;
}

export interface AgenciaResolved {
  agencia: Agencia;
  error?: any;
}
