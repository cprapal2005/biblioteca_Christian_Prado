import { Component, OnInit, EventEmitter, Output } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-login',
  templateUrl: './formulario-login.component.html',
  styles: [
  ]
})
export class FormularioLoginComponent implements OnInit {
  
  @Output() nombreUsuario = new EventEmitter<string>();
  libroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  loginUsuario(usuario: string) {

    this.nombreUsuario.emit(usuario);

  }
  
  ngOnInit() {
    this.libroForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.libroForm.valid) {
      this.loginUsuario(this.libroForm.value.usuario);
    }
  }
  
}
