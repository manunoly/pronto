export class Vehiculo {
  // para listar
  placa: string;
  marca: string;
  modelo: string;
  color: string;
  tipo: string;
  anio: number;
  ejes: 2;
  pais: string;
  provincia: string;
  activo: number;
  vehiculo_id: number;
  //para add vehiculo
  marca_id:number;
  modelo_id:number;
  tipo_id:number;
  cant_ejes:number;
  country_id:number;
  provincia_id:number;
  //para las fotos
  lista_fotos:string[];

}
