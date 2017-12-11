export class Solicitud {
  solicitud_id:number;
  titulo:string;
  categoria:string;
  subcategoria:string;
  descripcion:string;
  personal_adicional: number;
  fecha_operation:string;
  cotizacion_enviada:number;

  // para el cliente
  categoria_carga_id:number;
  subcategoria_carga_id:number;
  cant_personal_adicional:number;
  fecha_envio :string;
}
