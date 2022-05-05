
export class Producto{
    _id?: number;
    nombre: String;
    ubicacion: string;
    precio: number;
    categoria: string;

    constructor(nombre:string, ubicacion:string, precio: number, categoria: string){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.categoria = categoria;
    }
}