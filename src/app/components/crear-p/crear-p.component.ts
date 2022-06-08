import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-p',
  templateUrl: './crear-p.component.html',
  styleUrls: ['./crear-p.component.css']
})
export class CrearPComponent implements OnInit {
  productoForm: FormGroup

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private productoService: ProductoService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  agregarProducto(){
    const PRODUCTO: Producto ={
      nombre: this.productoForm.get('producto')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
      categoria: this.productoForm.get('categoria')?.value
    }
    console.log(PRODUCTO);
    this.productoService.crearProducto(PRODUCTO).subscribe(data => {
      this.toastr.success('Agregado Con Exito', 'Producto Nuevo');
      this.productoForm.reset();
    }, error =>{
      console.log(error);
      
    })  
  }
}
