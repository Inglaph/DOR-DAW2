import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void { // funcion para enviar el formulario
    if (this.contactForm.valid) {
      this.isSubmitting = true; // activo el envio del formulario
      // Aquí iría la lógica para enviar el formulario
      console.log(this.contactForm.value);
      
      // Simulamos el envío
      setTimeout(() => {
        this.isSubmitting = false; // desactivo el envio del formulario
        this.submitSuccess = true; // muestro el mensaje de exito
        this.contactForm.reset(); // reseteo el formulario
        
        setTimeout(() => {
          this.submitSuccess = false; // desactivo el mensaje de exito
        }, 3000); // tiempo de espera para que el mensaje de exito se desactive
      }, 1500); // tiempo de espera para que el formulario se envie
    }
  }

  get formControls() {
    return this.contactForm.controls;
  }
}
