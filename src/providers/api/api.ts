import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Vehiculo} from '../../models/vehiculo';
import {Solicitud} from '../../models/solicitud';

@Injectable()
export class ApiProvider {
  // apiBaseUrl = 'http://192.168.137.1:3000/';
  apiBaseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {

  }

//  auth
  register(user: User): Promise<any> {
    // cliente
    if (user.rol == 2)
      return this.http.post(this.apiBaseUrl + 'registro', {
        rol: user.rol,
        nombre: user.nombre,
        movil: user.movil,
        email: user.email,
        password: user.password
      })
        .toPromise()
        .then(
          () => {
            return true;
          }
        ).catch(this.handleError);
    else
      return this.http.post(this.apiBaseUrl + 'registro', {
        rol: user.rol,
        tipo_transportista: user.tipo_transportista,
        nombre: user.nombre,
        email: user.email,
        password: user.password,
        phone_movil: user.movil,
        country_id: user.country_id,
        province_id: user.province_id

      }).toPromise()
        .then(
          () => {
            return true;
          }
        ).catch(this.handleError);
  }


  login(user: User) {
    return this.http.post(this.apiBaseUrl + 'auth', {
      email: user.email,
      password: user.password,
      rol: user.rol,
      nombre: user.nombre,
    }).toPromise()
      .then(
        (response) => {
          localStorage.setItem('prontoUser', JSON.stringify({
            transportista_id: 1,
            email: response["email"],
            nombre: response["nombre"],
            rol: response["rol"],
            image: "user.imagen"
          }));
          return {
            status: 200,
            status_message: "",
            email: response["email"],
            nombre: "User Name",
            imagen: "urlImagen",
            rol: response["rol"]
          };
        }
      ).catch(this.handleError);
  }

  getUser(): User {
    var user = localStorage.getItem('prontoUser');
    // return user ? JSON.parse(user): false;
    return JSON.parse(user);
  }

  cambiar_datos_perfil(user: User): Promise<any> {
    // cliente
    if (user.rol == 2)
      return this.http.post(this.apiBaseUrl + 'cambiar_datos_perfil', {
        rol: user.rol,
        nombre: user.nombre,
        movil: user.movil,
        email: user.email,
        password: user.password
      })
        .toPromise()
        .then(
          () => {
            return true;
          }
        ).catch(this.handleError);
    else
      return this.http.post(this.apiBaseUrl + 'registro', {
        rol: user.rol,
        tipo_transportista: user.tipo_transportista,
        nombre: user.nombre,
        email: user.email,
        password: user.password,
        phone_movil: user.movil,
        country_id: user.country_id,
        province_id: user.province_id

      }).toPromise()
        .then(
          () => {
            return true;
          }
        ).catch(this.handleError);
  }

  get_paises(): Promise<any> {
    return this.http.get(this.apiBaseUrl + 'peticion_pais')
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  get_provincias(country_id): Promise<any> {
    let params = new HttpParams().set('country_id', country_id);
    return this.http.get(this.apiBaseUrl + 'peticion_provincias', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);

  }

  recordad_password(email: string): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'recordad_password', {
      email: email,
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  get_vehiculos(transportista_id): Promise<any> {
    let params = new HttpParams().set('transportista_id', transportista_id);
    return this.http.get(this.apiBaseUrl + 'lista_vehiculos', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);

  }

  add_vehiculo(v: Vehiculo, transportista_id) {
    return this.http.post(this.apiBaseUrl + 'add_vehiculo', {
      transportista_id: transportista_id,
      placa: v.placa,
      marca_id: v.marca_id,
      modelo_id: v.modelo_id,
      color: v.color,
      tipo_id: v.tipo_id,
      anio: v.anio,
      cant_ejes: v.cant_ejes,
      country_id: v.country_id,
      provincia_id: v.provincia_id
    }).toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
        }
      ).catch(this.handleError);
  }

  editar_vehiculo(v: Vehiculo) {
    return this.http.post(this.apiBaseUrl + 'editar_vehiculo', {
      color: v.color,
      country_id: v.country_id,
      provincia_id: v.provincia_id,
      vehiculo_id: v.vehiculo_id
    }).toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
        }
      ).catch(this.handleError);
  }

  eliminar_vehiculo(id) {
    let params = new HttpParams().set('vehiculo_id', id);
    return this.http.get(this.apiBaseUrl + 'eliminar_vehiculo', {params: params}).toPromise()
      .then(
        (response) => {
          return response;
          // return {status:200, status_message: ""};
        }
      ).catch(this.handleError);
  }

  detalle_vehiculo(vehiculo_id): Promise<Vehiculo> {
    let params = new HttpParams().set('vehiculo_id', vehiculo_id);
    return this.http.get(this.apiBaseUrl + 'detalle_vehiculo', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);

  }

  lista_marcas(): Promise<any> {
    return this.http.get(this.apiBaseUrl + 'lista_marcas')
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  cargar_modelos_autos(marca_id): Promise<any> {
    let params = new HttpParams().set('marca_id', marca_id);
    return this.http.get(this.apiBaseUrl + 'cargar_modelos_autos', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  cargar_tipos_vehiculos(): Promise<any> {
    return this.http.get(this.apiBaseUrl + 'cargar_tipos_vehiculos')
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  obtener_todos_servicios_prestados(): Promise<any> {
    return this.http.get(this.apiBaseUrl + 'obtener_todos_servicios_prestados')
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  obtener_mis_servicios_prestados(transportista_id): Promise<any> {
    let params = new HttpParams().set('transportista_id', transportista_id);
    return this.http.get(this.apiBaseUrl + 'obtener_mis_servicios_prestados', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  adicionar_servicio_prestado(transportista_id, servicio_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'adicionar_servicio_prestado', {
      transportista_id: transportista_id,
      servicio_id: servicio_id
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  eliminar_servicio_prestado(transportista_id, servicio_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'eliminar_servicio_prestado', {
      transportista_id: transportista_id,
      servicio_id: servicio_id
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  listar_areas_seleccionadas_servicio(transportista_id): Promise<any> {
    let params = new HttpParams().set('transportista_id', transportista_id);
    return this.http.get(this.apiBaseUrl + 'listar_areas_seleccionadas_servicio', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  seleccionar_area(transportista_id, provincia_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'seleccionar_area', {
      provincia_id_servicio: provincia_id,
      transportista_id: transportista_id
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        })
      .catch(this.handleError);
  }

  eliminar_area_seleccionada(transportista_id, provincia_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'seleccionar_area', {
      provincia_id_servicio: provincia_id,
      transportista_id: transportista_id
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        })
      .catch(this.handleError);
  }

  listar_solicitudes_servicio_activas(): Promise<any> {
    return this.http.get(this.apiBaseUrl + 'listar_solicitudes_servicio_activas')
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  detalle_solicitud(solicitud_id): Promise<any> {
    let params = new HttpParams().set('solicitud_id', solicitud_id);
    return this.http.get(this.apiBaseUrl + 'detalle_solicitud', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  enviar_propuesta(transportista_id, solicitud_id, valor, descripcion): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'enviar_propuesta', {
      transportista_id: transportista_id,
      propuesta_id: solicitud_id,
      valor: valor,
      descripcion: descripcion
    })
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  mis_traslados_realizados(transportista_id): Promise<any> {
    let params = new HttpParams().set('transportista_id', transportista_id);
    return this.http.get(this.apiBaseUrl + 'mis_traslados_realizados', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  mis_solicitudes_ejecutandose(cliente_id): Promise<any> {
    let params = new HttpParams().set('cliente_id', cliente_id);
    return this.http.get(this.apiBaseUrl + 'mis_traslados_realizados', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  iniciar_trayecto(transportista_id, traslado_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'iniciar_trayecto', {
      transportista_id: transportista_id,
      traslado_id: traslado_id
    })
      .toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
          // return response;
        }
      ).catch(this.handleError);
  }

  finalizar_trayecto(transportista_id, traslado_id): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'finalizar_trayecto', {
      transportista_id: transportista_id,
      traslado_id: traslado_id
    })
      .toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
          // return response;
        }
      ).catch(this.handleError);
  }

  cambiar_password(anterior_pass, new_pass): Promise<any> {
    return this.http.post(this.apiBaseUrl + 'cambiar_password', {
      anterior_pass: anterior_pass,
      new_pass: new_pass
    })
      .toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
          // return response;
        }
      ).catch(this.handleError);
  }

  // CLIENTE METODOS

  crear_solicitud(sol: Solicitud) {
    return this.http.post(this.apiBaseUrl + 'crear_solicitud', {
      titulo: sol.titulo,
      categoria_carga_id: sol.categoria_carga_id,
      subcategoria_carga_id: sol.subcategoria_carga_id,
      descripcion: sol.descripcion,
      cant_personal_adicional: sol.cant_personal_adicional,
      fecha_envio: sol.fecha_envio,
    }).toPromise()
      .then(
        (response) => {
          return {status: 200, status_message: ""};
        }
      ).catch(this.handleError);
  }

  mis_solicitudes_ejecutadas(cliente_id): Promise<any> {
    let params = new HttpParams().set('cliente_id', cliente_id);
    return this.http.get(this.apiBaseUrl + 'mis_solicitudes_ejecutadas', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }

  cotizaciones_por_solicitud(solicitud_id): Promise<any> {
    let params = new HttpParams().set('solicitud_id', solicitud_id);
    return this.http.get(this.apiBaseUrl + 'cotizaciones_por_solicitud', {params: params})
      .toPromise()
      .then(
        (response) => {
          return response;
        }
      ).catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
