export class Traslado {
  solicitud_id:number;
  traslado_id:number;
  titulo:string;
  categoria:string;
  subcategoria:string;
  descripcion:string;
  personal_adicional: number;
  fecha_operation:string;
  estado:number;  // 1 - aceptado, 2 - iniciado, 3 - terminado
  evaluacion:number; //1 al 5
}
