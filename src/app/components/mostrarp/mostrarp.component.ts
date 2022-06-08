import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mostrarp',
  templateUrl: './mostrarp.component.html',
  styleUrls: ['./mostrarp.component.css']
})
export class MostrarpComponent implements OnInit {

listProductos: Producto[] = [];

  constructor(private productoService : ProductoService,
            private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })  
  }

  eliminarProducto(id: any){
    this.productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El producto ha sido eliminado con exito', 'Eliminado')
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }
}
